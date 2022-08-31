import { h } from "preact";
import Quiz from ".";
import Dictionary, { getGenderArticle, getNounArticle, Word, WordGender } from "../../dictionary";

const GenderQuiz = () => {
    const words = new Dictionary().nouns();

    return <Quiz
        explainWord
        words={words}
        getCorrectChoice={word => getNounArticle(word)}
        getChoices={(word: Word) => [
            getGenderArticle(WordGender.Utrum),
            getGenderArticle(WordGender.Neutrum),
        ]}
        />
};

export default GenderQuiz;