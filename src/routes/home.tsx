import { Box, Card, CardBody, CardHeader, Heading, Text } from "grommet";
import { h } from "preact";
import { Link } from "preact-router";
import GenderQuiz from "./quiz/gender";

interface QuizBoxProps {
	href: string;
	title: string;
	description: string;
}

const QuizBox = (props: QuizBoxProps) => (
	<Card pad="medium">
		<CardHeader>
			<Heading>
				<Link href={props.href}>{props.title}</Link>
			</Heading>
		</CardHeader>
		<CardBody>
			<Text>
				{props.description}
			</Text>
		</CardBody>
	</Card>
);

const Quizzes = () => (
	<Box>
		<QuizBox
			href="/quiz/gender"
			title="Gender Quiz"
			description="Guess the grammatical gender of nouns."
			/>
	</Box>
);

const Home = () => (
	<Box>
		<Quizzes />
	</Box>
);

export default Home;
