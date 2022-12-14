import { Box, Grommet } from 'grommet';
import { h, render } from 'preact';
import { Router } from 'preact-router';
import Footer from './components/footer';
import Header from './components/header';
import { customTheme } from './components/theme';
import Home from './routes/home';
import GenderQuiz from './routes/quiz/gender';
import { NounTranslationQuiz, VerbTranslationQuiz } from './routes/quiz/translation';
import Settings from './routes/settings';

const App = () => (
	<Grommet theme={customTheme} full>
		<Header />
		<Box pad={{vertical: "large", horizontal: "medium"}}>
			<Router basename={process.env.PUBLIC_URL}>
				<Home path="/" />
				<GenderQuiz path="/quiz/gender" />
				<NounTranslationQuiz path="/quiz/noun" />
				<VerbTranslationQuiz path="/quiz/verb" />
				<Settings path="/settings" />
			</Router>
		</Box>
		<Footer />
	</Grommet>
)

export default App;


const appNode = document.getElementById("app-root");
render(<App />, appNode);