import { Box, Button } from "grommet";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Statistics } from ".";
import { WordCard } from "../../components/word";
import Dictionary, { getNounArticle, Word, WordGender } from "../../dictionary";

interface NounQuizChoiceProps {
    onSelect: (word: Word) => void;
    alternatives: Word[];
}

const NounQuizChoice = (props: NounQuizChoiceProps) => {
    return <Box pad="medium" gap="large" direction="column" justify="center">
        {props.alternatives.map(word => 
            <Button primary label={word.en} size="large" onClick={() => props.onSelect(word)} />
        )}
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

    const createAlternatives = (n: number) => {
        const alternatives = [];
        for(let i = 0; i < n; i++) {
            alternatives.push(words.pickRandom());
        }
        return shuffle(alternatives);
    };

    const [currentNoun, setCurrentNoun] = useState<Word>(words.pickRandom());
    const [alternatives, setAlternatives] = useState<Word[]>([]);
    const [statistics, setStatistics] = useState(new Statistics());
    const [result, setResult] = useState<boolean | null>(null);
    const checkTranslation = (word: Word) => {
        const result = word.sv === currentNoun.sv;
        setStatistics(statistics.updateFromResult(result));
        setResult(result);
    };
    const nextNoun = () => {
        setResult(null);
        setCurrentNoun(words.pickRandom());
    };

    useEffect(() => {
        const alternatives = [currentNoun, ...createAlternatives(2)];
        setAlternatives(shuffle(alternatives));
    }, [currentNoun]);

    return <Box>
        <WordCard noun={currentNoun} statistics={statistics} />
        {result === null
            ? <Box><NounQuizChoice onSelect={checkTranslation} alternatives={alternatives}/></Box>
            : <NounQuizResult noun={currentNoun} result={result} onNext={nextNoun} /> }
    </Box>;
};

function shuffle<T>(array: T[]) : T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default NounQuiz;
