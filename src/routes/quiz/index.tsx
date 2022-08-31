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

export default Quiz;