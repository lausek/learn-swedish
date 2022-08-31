import { h } from "preact";
import { TranslationQuiz } from ".";
import Dictionary from "../../dictionary";

export function NounTranslationQuiz() {
    const words = new Dictionary().nouns();
    return <TranslationQuiz words={words} />;
}


export function VerbTranslationQuiz() {
    const words = new Dictionary().verbs();
    return <TranslationQuiz words={words} />;
}