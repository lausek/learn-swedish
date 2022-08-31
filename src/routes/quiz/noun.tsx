import { h } from "preact";
import Quiz from ".";
import Dictionary, { getNounArticle, Word } from "../../dictionary";

const NounQuiz = () => {
    const words = new Dictionary().nouns();
    return <Quiz words={words} />;
};

export default NounQuiz;
