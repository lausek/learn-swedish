import { Header as GrommetHeader, Heading, Nav } from 'grommet';
import { HomeRounded, LinkPrevious, MoreVertical } from 'grommet-icons';
import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<GrommetHeader background="brand" pad={{vertical: "xsmall", horizontal: "medium"}}>
		<Nav direction="row" pad="medium" gap="20px">
			<Link href="/"><LinkPrevious color="accent-1" /></Link>
		</Nav>
		<Heading color="accent-1">
			<Link href="/">Swedish</Link>
		</Heading>
		<Nav direction="row" pad="medium" gap="20px">
			<Link href="/settings"><MoreVertical color="accent-1" /></Link>
		</Nav>
	</GrommetHeader>
);

export default Header;
