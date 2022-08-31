import nouns from "./nouns.json";
import verbs from "./verbs.json";

interface JsonDictionary { [key: string]: Word }

export enum WordGender {
    Utrum = "u",
    Neutrum = "n",
}

export function getGenderArticle(gender: WordGender) : string {
    return gender === WordGender.Utrum ? "en" : "ett";
}

export function getNounArticle(word: Word) : string {
    return getGenderArticle(word.gender);
}

export interface Word {
    sv: string;
    en: string;
    gender: WordGender;
    lexcat: "noun" | "verb" | "adj";
    pluarl?: boolean;
    detail: string;
}

export class WordSet {
    private words;

    constructor(words: JsonDictionary) {
        this.words = words;
    }

    public pickRandom(): Word {
        const keys = Object.keys(this.words);
        return this.words[keys[keys.length * Math.random() << 0]];
    }

    public alternativeFor(word: Word) : Word {
        return this.pickRandom();
    }
}

export default class Dictionary {
    public nouns(): WordSet {
        return new WordSet(nouns as JsonDictionary);
    }

    public verbs(): WordSet {
        return new WordSet(verbs as JsonDictionary);
    }
}