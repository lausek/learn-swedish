import { Header as GrommetHeader, Heading, Nav } from 'grommet';
import { HomeRounded, MoreVertical } from 'grommet-icons';
import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<GrommetHeader background="brand" pad={{vertical: "xsmall", horizontal: "medium"}}>
		<Heading color="accent-1">
			<Link href="/">Learn Swedish</Link>
		</Heading>
		{/*
		<Nav direction="row" pad="medium" gap="20px">
			<Link href="/"><HomeRounded color="accent-1" /></Link>
			<Link href="/settings"><MoreVertical color="accent-1" /></Link>
		</Nav>
		*/}
	</GrommetHeader>
);

export default Header;
