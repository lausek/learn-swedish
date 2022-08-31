import { Box, Card, CardBody, CardHeader, Heading, Paragraph, Text } from "grommet";
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
			<Heading margin="small">
				<Link href={props.href}>{props.title}</Link>
			</Heading>
		</CardHeader>
		<CardBody>
			<Paragraph>
				{props.description}
			</Paragraph>
		</CardBody>
	</Card>
);

const Quizzes = () => (
	<Box gap="20px">
		<QuizBox
			href="/quiz/gender"
			title="Gender Quiz"
			description="Guess the grammatical gender of nouns."
			/>

		<QuizBox
			href="/quiz/noun"
			title="Noun Quiz"
			description="Guess the English translation of nouns."
			/>

		<QuizBox
			href="/quiz/verb"
			title="Verb Quiz"
			description="Guess the English translation of verbs."
			/>
	</Box>
);

const Home = () => (
	<Box>
		<Quizzes />
	</Box>
);

export default Home;
