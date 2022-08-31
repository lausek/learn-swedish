import { Box, Button } from "grommet";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { WordCard } from "../../components/word";
import Dictionary, { getNounArticle, Word, WordSet } from "../../dictionary";
import { Statistics } from "./statistics";

export interface QuizChoice {
    label: string;
    word: Word;
}

interface QuizProps {
    words: WordSet;
    explainWord?: boolean;
    onChoiceSelected: (currentWord: Word, choice: QuizChoice) => boolean;
    onChoicesWanted: (word: Word) => QuizChoice[];
}

interface QuizChoiceProps {
    onClick: (word: QuizChoice) => void;
    choices: QuizChoice[];
    correctLabel?: string;
}

const QuizChoices = (props: QuizChoiceProps) => {
    return <Box pad="medium" gap="large" direction="column" justify="center">
        {props.choices.map(choice => 
            <Button primary label={choice.label}
                color={props.correctLabel && props.correctLabel === choice.label && "status-ok"}
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
    const [choice, setChoice] = useState<string | null>(null);
    const onNextWord = (quizChoice: QuizChoice) => {
        setChoice(null);
        setCurrentWord(props.words.pickRandom());
    };
    const onChoiceSelected = (quizChoice: QuizChoice) => {
        const result = props.onChoiceSelected(currentWord, quizChoice);
        setStatistics(statistics.updateFromResult(result));
        setChoice(quizChoice.label);
    };

    useEffect(() => {
        setChoices(props.onChoicesWanted(currentWord));
    }, [currentWord]);

    return <Box>
        <WordCard explainWord={props.explainWord} word={currentWord} statistics={statistics} />
        <Box>
            <QuizChoices
                choices={choices}
                correctLabel={choice}
                onClick={choice ? onNextWord : onChoiceSelected}
            />
            <Controls onSkip={onNextWord} />
        </Box>
    </Box>;
};

export default Quiz;