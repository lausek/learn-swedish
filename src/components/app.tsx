import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Settings from '../routes/settings';
import { h } from 'preact';
import { Box, Grommet } from 'grommet';
import { customTheme } from './theme';
import Footer from './footer';

const App = () => (
	<Grommet theme={customTheme} full>
		<Header />
		<Box pad={{vertical: "large", horizontal: "medium"}}>
			<Router>
				<Home path="/" />
				<Settings path="/settings" />
			</Router>
		</Box>
		<Footer />
	</Grommet>
)

export default App;
