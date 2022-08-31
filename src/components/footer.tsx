import { Footer as GrommetFooter, Text } from 'grommet';
import { h } from 'preact';

const Footer = () => (
	<GrommetFooter pad="medium" justify="center">
        <Text textAlign="center" size="xsmall" color="gray">
			Made by <a href="https://lausek.eu" target="_blank" rel="noopener noreferrer">lausek</a>.
			|
			Based on <a href="https://dict.cc" target="_blank" rel="noopener noreferrer">dict.cc</a>.
		</Text>
	</GrommetFooter>
);

export default Footer;
