import { Box, Button, Card, CardBody, CardFooter, CardHeader, Text } from "grommet";
import { h } from "preact";
import { useState } from "preact/hooks";
import { Statistics } from ".";
import { WordCard } from "../../components/word";
import Dictionary, { getNounArticle, Word, WordGender } from "../../dictionary";

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

const Controls = (props: { onSkip: () => void }) => {
    return <Box pad="medium" direction="row" justify="center">
        <Button secondary color="gray" label="Skip" size="medium" onClick={props.onSkip} />
    </Box>;
};

const GenderQuiz = () => {
    const words = new Dictionary().nouns();
    const [currentNoun, setCurrentNoun] = useState<Word>(words.pickRandom());
    const [statistics, setStatistics] = useState(new Statistics());
    const [result, setResult] = useState<boolean | null>(null);
    const checkCurrentGender = (gender: WordGender) => {
        const result = gender === currentNoun.gender;
        setResult(result);
        setStatistics(statistics.updateFromResult(result));
    };
    const nextNoun = () => {
        setResult(null);
        setCurrentNoun(words.pickRandom());
    };

    return <Box>
        <WordCard explainWord word={currentNoun} statistics={statistics} />
        {result === null
            ? <Box><GenderQuizChoice onSelect={checkCurrentGender} /><Controls onSkip={nextNoun} /></Box>
            : <GenderQuizResult noun={currentNoun} result={result} onNext={nextNoun} /> }
    </Box>;
};

export default GenderQuiz;