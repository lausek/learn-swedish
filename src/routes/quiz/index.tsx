import { Box, Button } from "grommet";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { WordCard } from "../../components/word";
import Dictionary, { getNounArticle, Word, WordSet } from "../../dictionary";
import { Statistics } from "./statistics";

interface QuizChoiceProps {
    onSelect: (word: Word) => void;
    choices: QuizChoice[];
}

interface QuizChoice {
    label: string;
    word: Word;
}

const QuizChoices = (props: QuizChoiceProps) => {
    return <Box pad="medium" gap="large" direction="column" justify="center">
        {props.choices.map(choice => 
            <Button primary label={choice.label} size="large" onClick={() => props.onSelect(choice.word)} />
            )}
    </Box>;
};

const QuizResult = (props: { word: Word, result: boolean, onNext: () => void }) => {
    return <Box pad="large" direction="row" justify="center">
        <Button primary size="large"
            color={props.result ? "status-ok" : "status-error"}
            label={`${getNounArticle(props.word)} ${props.word.sv}`}
            onClick={props.onNext} />
    </Box>;
};

const Quiz = (props: {words: WordSet}) => {
    const createAlternatives = (n: number) => {
        const alternatives = [];
        for(let i = 0; i < n; i++) {
            alternatives.push(props.words.pickRandom());
        }
        return shuffle(alternatives);
    };

    const [currentWord, setCurrentNoun] = useState<Word>(props.words.pickRandom());
    const [choices, setChoices] = useState<QuizChoice[]>([]);
    const [statistics, setStatistics] = useState(new Statistics());
    const [result, setResult] = useState<boolean | null>(null);
    const checkTranslation = (word: Word) => {
        const result = word.sv === currentWord.sv;
        setStatistics(statistics.updateFromResult(result));
        setResult(result);
    };
    const nextNoun = () => {
        setResult(null);
        setCurrentNoun(props.words.pickRandom());
    };

    useEffect(() => {
        const choices = [];
        for(const word of [currentWord, ...createAlternatives(2)]) {
            const label = word.en;
            choices.push({ label, word });
        }
        setChoices(shuffle(choices));
    }, [currentWord]);

    return <Box>
        <WordCard word={currentWord} statistics={statistics} />
        {result === null
            ? <Box><QuizChoices onSelect={checkTranslation} choices={choices}/></Box>
            : <QuizResult word={currentWord} result={result} onNext={nextNoun} /> }
    </Box>;
};

function shuffle<T>(array: T[]) : T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default Quiz;