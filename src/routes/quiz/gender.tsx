import { Box, Button } from "grommet";
import { h } from "preact";
import { useState } from "preact/hooks";
import Quiz, { QuizChoice } from ".";
import { WordCard } from "../../components/word";
import Dictionary, { getGenderArticle, getNounArticle, Word, WordGender } from "../../dictionary";
import { Statistics } from "./statistics";

const GenderQuizChoice = (props: { onSelect: (gender: WordGender) => void }) => {
    return <Box pad="medium" gap="large" direction="row" justify="center">
        <Button primary label="en" size="large" onClick={() => props.onSelect(WordGender.Utrum)} />
        <Button primary label="ett" size="large" onClick={() => props.onSelect(WordGender.Neutrum)} />
    </Box>;
};

const GenderQuizResult = (props: { noun: Word, result: boolean, onNext: () => void }) => {
    return <Box pad="large" direction="row" justify="center">
        <Button primary size="large"
            color={props.result ? "status-ok" : "status-error"}
            label={`${getNounArticle(props.noun)} ${props.noun.sv}`}
            onClick={props.onNext} />
    </Box>;
};


const GenderQuiz = () => {
    const words = new Dictionary().nouns();
    const checkGender = (currentWord: Word, choice: QuizChoice) => getGenderArticle(currentWord.gender) == choice.label;

    return <Quiz
        explainWord
        words={words}
        onChoiceSelected={checkGender}
        onChoicesWanted={(word: Word) => {
            return [
                {label: getGenderArticle(WordGender.Utrum), word, },
                {label: getGenderArticle(WordGender.Neutrum), word, },
            ];
        }}
        />
};

export default GenderQuiz;