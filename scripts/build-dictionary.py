#!/usr/bin/python3

from dataclasses import dataclass
from enum import Enum
from operator import is_
from pathlib import Path
from typing import Dict, Generator, Optional, Tuple

import json
import re
import sys

WORD_META_EXTRACTION_REGEX = re.compile(r"\{(.+)\}")
WORD_DETAIL_EXTRACTION_REGEX = re.compile(r"\[(.+)\]")


class Gender(Enum):
    Utrum = "u"
    Neutrum = "n"


@dataclass
class Word:
    sv: str
    en: str
    lexcat: str
    gender: Optional[Gender]
    plural: Optional[str]
    detail: str

    def is_noun(self) -> bool:
        return "noun" in self.lexcat

    def is_singular(self) -> bool:
        return self.plural is not None and not self.plural


def main():
    assert 1 < len(sys.argv), "No source dictionary specified."

    root_dir = Path(sys.argv[0]).absolute().parent.parent
    output_path = root_dir / "src" / "components" / "dictionary-en.json"
    source_path = sys.argv[1]
    dictionary = {}

    for line in source_dictionary(source_path):
        try:
            word = parse_word(line)

            if word.is_noun() and word.is_singular():
                dictionary[word.sv] = word

        except Exception as e:
            print(f"WARNING Skipping: {line}. {e}")

    print("Collected", len(dictionary), "nouns.")

    output_dictionary(output_path, dictionary)


def source_dictionary(path: str) -> Generator[str, None, None]:
    def is_valid(line: str) -> bool:
        return line and not line.startswith("#")

    def normalize_line(line: str) -> str:
        return line.strip()

    with open(path) as fin:
        yield from filter(is_valid, map(normalize_line, fin.readlines()))


def output_dictionary(path: str, dictionary: Dict[str, Word]):
    from dataclasses import asdict, is_dataclass

    class EnhancedJSONEncoder(json.JSONEncoder):
        def default(self, o):
            if is_dataclass(o):
                return asdict(o)
            if isinstance(o, Enum):
                return o.value
            return super().default(o)

    with open(path, "w") as fout:
        json.dump(dictionary, fout, cls=EnhancedJSONEncoder)


def is_plural(meta: str) -> bool:
    return "pl" in meta


def extract_gender(meta: str) -> Optional[Gender]:
    if "u" in meta:
        return Gender.Utrum

    if "n" in meta:
        return Gender.Neutrum

    return None


def strip_match(word: str, match) -> str:
    match_start, match_end = match.span()
    word = word[:match_start] + word[match_end:]
    return word.strip()


def extract_detail(word: str) -> Tuple[str, str]:
    match = WORD_DETAIL_EXTRACTION_REGEX.search(word)
    if not match:
        return word, ""

    detail = match.group(1).replace("]", ";").replace("[", "")
    return strip_match(word, match), detail


def extract_meta(word: str) -> Tuple[Optional[bool], Optional[Gender]]:
    match = WORD_META_EXTRACTION_REGEX.search(word)
    if not match:
        return word, None, None

    meta = match.group(1)
    return strip_match(word, match), is_plural(meta), extract_gender(meta)


def parse_word(line: str) -> Word:
    sv_word, en_word, *rest = line.split("\t")
    assert 1 <= len(rest), "No support for phrases."

    sv_word, detail = extract_detail(sv_word)
    en_word, _drop = extract_detail(en_word)
    sv_word, is_plural, gender = extract_meta(sv_word)
    lexical_category = rest[0]

    return Word(
        sv_word,
        en_word,
        lexical_category,
        plural=is_plural,
        gender=gender,
        detail=detail,
    )


if __name__ == "__main__":
    main()
