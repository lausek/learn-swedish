import nouns from "./nouns.json";
import verbs from "./verbs.json";

interface JsonDictionary { [key: string]: Word }

export enum WordGender {
    Utrum = "u",
    Neutrum = "n",
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
}

export default class Dictionary {
    public nouns(): WordSet {
        return new WordSet(nouns as JsonDictionary);
    }
}