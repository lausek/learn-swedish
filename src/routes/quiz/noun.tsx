import { Box, Button } from "grommet";
import { h } from "preact";
import { useState } from "preact/hooks";
import { WordCard } from "../../components/word";
import Dictionary, { getNounArticle, Word, WordGender } from "../../dictionary";

const NounQuizChoice = (props: { onSelect: (gender: WordGender) => void }) => {
    return <Box pad="medium" gap="large" direction="row" justify="center">
        <Button primary label="en" size="large" onClick={() => props.onSelect(WordGender.Utrum)} />
        <Button primary label="ett" size="large" onClick={() => props.onSelect(WordGender.Neutrum)} />
    </Box>;
};

const NounQuizResult = (props: { noun: Word, result: boolean, onNext: () => void }) => {
    return <Box pad="large" direction="row" justify="center">
        <Button primary size="large"
            color={props.result ? "status-ok" : "status-error"}
            label={`${getNounArticle(props.noun)} ${props.noun.sv}`}
            onClick={props.onNext} />
    </Box>;
};


const NounQuiz = () => {
    const words = new Dictionary().nouns();
    const [currentNoun, setCurrentNoun] = useState<Word>(words.pickRandom());
    const [statistics, setStatistics] = useState({ correct: 0, total: 0});
    const [result, setResult] = useState<boolean | null>(null);
    const checkCurrentGender = (gender: WordGender) => {
        const result = gender === currentNoun.gender;
        let { correct, total } = statistics;

        total += 1;
        if(result) {
            correct += 1;
        }

        setResult(result);
        setStatistics({ correct, total });
    };
    const nextNoun = () => {
        setResult(null);
        setCurrentNoun(words.pickRandom());
    };

    return <Box>
        <WordCard noun={currentNoun} statistics={statistics} />
        {result === null
            ? <Box><NounQuizChoice onSelect={checkCurrentGender} /></Box>
            : <NounQuizResult noun={currentNoun} result={result} onNext={nextNoun} /> }
    </Box>;
};

export default NounQuiz;