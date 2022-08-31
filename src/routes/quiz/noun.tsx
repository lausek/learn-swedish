import { h } from "preact";
import Quiz, { QuizChoice } from ".";
import Dictionary, { Word, WordSet } from "../../dictionary";

const NounQuiz = () => {
    const words = new Dictionary().nouns();
    const checkTranslation = (currentWord: Word, choice: QuizChoice) => currentWord.sv == choice.word.sv;

    return <Quiz
        words={words}
        onChoiceSelected={checkTranslation}
        onChoicesWanted={(word: Word) => {
            const choices = [];
            for(const choiceWord of shuffle([word, ...createAlternatives(words, 2)])) {
                const label = choiceWord.sv;
                choices.push({label, word: choiceWord});
            }
            return choices;
        }}
        />;
};

const createAlternatives = (words: WordSet, n: number) => {
    const alternatives = [];
    for(let i = 0; i < n; i++) {
        alternatives.push(words.pickRandom());
    }
    return alternatives;
};


function shuffle<T>(array: T[]) : T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export default NounQuiz;
