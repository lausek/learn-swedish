import { Box, Button } from "grommet";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { WordCard } from "../../components/word";
import { Word, WordSet } from "../../dictionary";
import { Statistics } from "./statistics";

export type QuizChoice = string;

interface QuizProps {
    words: WordSet;
    explainWord?: boolean;
    getCorrectChoice: (word: Word) => QuizChoice;
    getChoices: (word: Word) => QuizChoice[];
}

interface QuizChoiceProps {
    onClick: (word: QuizChoice) => void;
    choices: QuizChoice[];
    correctChoice?: string;
}

const QuizChoices = (props: QuizChoiceProps) => {
    return <Box pad="medium" gap="large" direction="column" justify="center">
        {props.choices.map(choice => 
            <Button primary
                label={choice}
                color={props.correctChoice && props.correctChoice === choice && "status-ok"}
                size="large" onClick={() => props.onClick(choice)} />
            )}
    </Box>;
};

const Controls = (props: { onSkip: (_: any) => void }) => {
    return <Box pad="medium" direction="row" justify="center">
        <Button secondary color="gray" label="Skip" size="medium" onClick={props.onSkip} />
    </Box>;
};

const Quiz = (props: QuizProps) => {
    const [currentWord, setCurrentWord] = useState<Word>(props.words.pickRandom());
    const [choices, setChoices] = useState<QuizChoice[]>([]);
    const [statistics, setStatistics] = useState(new Statistics());
    const [correctChoice, setCorrectChoice] = useState<QuizChoice | null>(null);
    const onNextWord = (quizChoice: QuizChoice) => {
        setCorrectChoice(null);
        setCurrentWord(props.words.pickRandom());
    };
    const onChoiceSelected = (quizChoice: QuizChoice) => {
        const correctChoice = props.getCorrectChoice(currentWord);
        const result = correctChoice == quizChoice;
        setStatistics(statistics.updateFromResult(result));
        setCorrectChoice(correctChoice);
    };

    useEffect(() => {
        setChoices(props.getChoices(currentWord));
    }, [currentWord]);

    return <Box>
        <WordCard explainWord={props.explainWord} word={currentWord} statistics={statistics} />
        <Box>
            <QuizChoices
                choices={choices}
                correctChoice={correctChoice}
                onClick={correctChoice ? onNextWord : onChoiceSelected}
            />
            <Controls onSkip={onNextWord} />
        </Box>
    </Box>;
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

export default Quiz;

export function TranslationQuiz(props: {words: WordSet}) {
    return <Quiz
        words={props.words}
        getCorrectChoice={word => word.en}
        getChoices={(word: Word) => {
            const choices = [
                word.en,
                props.words.alternativeFor(word).en,
                props.words.alternativeFor(word).en,
            ];
            return shuffle(choices);
        }}
        />;
};
