import { Box, Button } from "grommet";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { WordCard } from "../../components/word";
import Dictionary, { getNounArticle, Word, WordGender } from "../../dictionary";
import { Statistics } from "./statistics";

interface VerbQuizChoiceProps {
    onSelect: (word: Word) => void;
    alternatives: Word[];
}

const VerbQuizChoice = (props: VerbQuizChoiceProps) => {
    return <Box pad="medium" gap="large" direction="column" justify="center">
        {props.alternatives.map(word => 
            <Button primary label={word.en} size="large" onClick={() => props.onSelect(word)} />
        )}
    </Box>;
};

const VerbQuizResult = (props: { word: Word, result: boolean, onNext: () => void }) => {
    return <Box pad="large" direction="row" justify="center">
        <Button primary size="large"
            color={props.result ? "status-ok" : "status-error"}
            label={props.word.en}
            onClick={props.onNext} />
    </Box>;
};

const VerbQuiz = () => {
    const words = new Dictionary().verbs();

    const createAlternatives = (n: number) => {
        const alternatives = [];
        for(let i = 0; i < n; i++) {
            alternatives.push(words.pickRandom());
        }
        return shuffle(alternatives);
    };

    const [currentWord, setCurrentWord] = useState<Word>(words.pickRandom());
    const [alternatives, setAlternatives] = useState<Word[]>([]);
    const [statistics, setStatistics] = useState(new Statistics());
    const [result, setResult] = useState<boolean | null>(null);
    const checkTranslation = (word: Word) => {
        const result = word.sv === currentWord.sv;
        setStatistics(statistics.updateFromResult(result));
        setResult(result);
    };
    const nextWord = () => {
        setResult(null);
        setCurrentWord(words.pickRandom());
    };

    useEffect(() => {
        const alternatives = [currentWord, ...createAlternatives(2)];
        setAlternatives(shuffle(alternatives));
    }, [currentWord]);

    return <Box>
        <WordCard word={currentWord} statistics={statistics} />
        {result === null
            ? <Box><VerbQuizChoice onSelect={checkTranslation} alternatives={alternatives}/></Box>
            : <VerbQuizResult word={currentWord} result={result} onNext={nextWord} /> }
    </Box>;
};

function shuffle<T>(array: T[]) : T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default VerbQuiz;
