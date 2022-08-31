import { Box } from "grommet";
import { h } from "preact";
import { Link } from "preact-router";
import GenderQuiz from "./quiz/gender";

const Quizzes = () => (
	<Box>
		<Link href="/quiz/gender">
			Gender Quiz
		</Link>
	</Box>
);

const Home = () => (
	<Box>
		<Quizzes />
	</Box>
);

export default Home;
