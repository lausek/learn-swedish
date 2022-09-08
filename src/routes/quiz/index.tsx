import { Box, Button } from "grommet";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { WordCard } from "../../components/word";
import { Word, WordSet } from "../../dictionary";
import { Statistics } from "./statistics";
import 'animate.css';

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
    currentChoice?: string;
    correctChoice?: string;
}

const QuizChoices = (props: QuizChoiceProps) => {
    return <Box pad="medium" gap="large" direction="column" justify="center">
        {props.choices.map(choice => (
            <Button primary
                className="animate__animated"
                label={choice}
                color={props.currentChoice && props.correctChoice === choice && "status-ok"}
                size="large" onClick={(event: any) => {
                    const animation = props.correctChoice === choice ? "animate__tada" : "animate__headShake";
                    event.target.classList.toggle(animation);
                    setTimeout(() => props.onClick(choice), 500);
                }} />
            ))}
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
    const [currentChoice, setCurrentChoice] = useState<QuizChoice | null>(null);

    const onNextWord = (quizChoice: QuizChoice) => {
        setCurrentWord(props.words.pickRandom());
    };
    const onChoiceSelected = (quizChoice: QuizChoice) => {
        const result = correctChoice == quizChoice;
        setStatistics(statistics.updateFromResult(result));
        setCurrentChoice(quizChoice);
    };

    useEffect(() => {
        setChoices(props.getChoices(currentWord));
        setCorrectChoice(props.getCorrectChoice(currentWord));
        setCurrentChoice(null);
    }, [currentWord]);

    return <Box>
        <WordCard explainWord={props.explainWord} word={currentWord} statistics={statistics} />
        <Box>
            <QuizChoices
                choices={choices}
                currentChoice={currentChoice}
                correctChoice={correctChoice}
                onClick={currentChoice ? onNextWord : onChoiceSelected}
            />
            <Controls onSkip={onNextWord} />
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
