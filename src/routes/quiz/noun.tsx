import { Box, Button } from "grommet";
import { h } from "preact";
import { useState } from "preact/hooks";
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
    const [currentNoun, setCurrentNoun] = useState<Word>(words.pickRandom());
    const [statistics, setStatistics] = useState({ correct: 0, total: 0});
    const [result, setResult] = useState<boolean | null>(null);
    const checkTranslation = (word: Word) => {
        console.log(word.sv)
        console.log(currentNoun.sv)
        const result = word.sv === currentNoun.sv;
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
    const createAlternatives = (n: number) => {
        const alternatives = [];
        for(let i = 0; i < n; i++) {
            alternatives.push(words.pickRandom());
        }
        return alternatives;
    };

    return <Box>
        <WordCard noun={currentNoun} statistics={statistics} />
        {result === null
            ? <Box><NounQuizChoice onSelect={checkTranslation} alternatives={[currentNoun, ...createAlternatives(2)]}/></Box>
            : <NounQuizResult noun={currentNoun} result={result} onNext={nextNoun} /> }
    </Box>;
};

export default NounQuiz;