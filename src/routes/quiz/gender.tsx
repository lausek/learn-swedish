import { Box, Button, Card, CardBody, CardFooter, CardHeader, Text } from "grommet";
import { h } from "preact";
import { useState } from "preact/hooks";
import Dictionary, { getNounArticle, Word, WordGender } from "../../dictionary";

interface Statistics {
    correct: number;
    total: number;
}

const Annotation = (props: any) => <Text color="gray">{props.children}</Text>;

const NounDisplay = (props: { noun: Word, statistics: Statistics }) => {
    return <Box pad="large">
        <Card>
            <CardHeader pad={{top: "large", bottom: "medium", horizontal: "medium"}}>
                <Text size="xlarge">
                    {props.noun.sv} <Annotation>[sv]</Annotation>
                </Text>
            </CardHeader>
            <CardBody pad={{vertical: "medium", horizontal: "medium"}}>
                <Text size="medium" weight="lighter">
                    {props.noun.en} <Annotation>[en]</Annotation>
                </Text>
            </CardBody>
            <CardFooter pad="medium" background="light-1" justify="end">
                <Text>Correct {props.statistics.correct} / {props.statistics.total}</Text>
            </CardFooter>
        </Card>
    </Box>;
};

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
        <NounDisplay noun={currentNoun} statistics={statistics} />
        {result === null
            ? <Box><GenderQuizChoice onSelect={checkCurrentGender} /><Controls onSkip={nextNoun} /></Box>
            : <GenderQuizResult noun={currentNoun} result={result} onNext={nextNoun} /> }
    </Box>;
};

export default GenderQuiz;