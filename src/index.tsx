import { Box, Grommet } from 'grommet';
import { h, render } from 'preact';
import { Router } from 'preact-router';
import Footer from './components/footer';
import Header from './components/header';
import { customTheme } from './components/theme';
import Home from './routes/home';
import GenderQuiz from './routes/quiz/gender';
import NounQuiz from './routes/quiz/noun';
import VerbQuiz from './routes/quiz/verb';
import Settings from './routes/settings';

const App = () => (
	<Grommet theme={customTheme} full>
		<Header />
		<Box pad={{vertical: "large", horizontal: "medium"}}>
			<Router>
				<Home path="/" />
				<GenderQuiz path="/quiz/gender" />
				<NounQuiz path="/quiz/noun" />
				<VerbQuiz path="/quiz/verb" />
				<Settings path="/settings" />
			</Router>
		</Box>
		<Footer />
	</Grommet>
)

export default App;


const appNode = document.getElementById("app-root");
render(<App />, appNode);