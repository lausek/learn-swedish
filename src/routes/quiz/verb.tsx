import { h } from "preact";
import Quiz from ".";
import Dictionary from "../../dictionary";

const VerbQuiz = () => {
    const words = new Dictionary().verbs();
    return <Quiz words={words} />;
};

export default VerbQuiz;
