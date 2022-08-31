import { Box, Button } from "grommet";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { WordCard } from "../../components/word";
import Dictionary, { getNounArticle, Word, WordSet } from "../../dictionary";
import { Statistics } from "./statistics";

interface QuizChoiceProps {
    onClick: (word: Word) => void;
    choices: QuizChoice[];
    correctLabel?: string;
}

interface QuizChoice {
    label: string;
    word: Word;
}

const QuizChoices = (props: QuizChoiceProps) => {
    return <Box pad="medium" gap="large" direction="column" justify="center">
        {props.choices.map(choice => 
            <Button primary label={choice.label}
                color={props.correctLabel && props.correctLabel === choice.label && "status-ok"}
                size="large" onClick={() => props.onClick(choice.word)} />
            )}
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

    const [currentWord, setCurrentWord] = useState<Word>(props.words.pickRandom());
    const [choices, setChoices] = useState<QuizChoice[]>([]);
    const [statistics, setStatistics] = useState(new Statistics());
    const [choice, setChoice] = useState<string | null>(null);
    const checkTranslation = (word: Word) => {
        const result = word.sv === currentWord.sv;
        setStatistics(statistics.updateFromResult(result));
        setChoice(currentWord.en);
    };
    const nextWord = (word: Word) => {
        setChoice(null);
        setCurrentWord(props.words.pickRandom());
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
        <Box>
            <QuizChoices choices={choices}
                correctLabel={choice}
                onClick={choice ? nextWord : checkTranslation}
            />
        </Box>
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