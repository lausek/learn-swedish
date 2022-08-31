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
