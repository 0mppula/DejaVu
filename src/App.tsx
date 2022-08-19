import { FC } from 'react';
import styled from 'styled-components';
import Game from './Components/Game/Game';

const Container = styled.div`
	padding-top: 2rem;
	display: flex;
	min-height: 100vh;
	width: min(768px, 93vw);
	margin: 0 auto;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.h1`
	margin-bottom: 1rem;
	font-size: 3rem;
	color: #222222;
`;

const App: FC = () => {
	return (
		<Container>
			<Header>Deja Vu</Header>
			<Game />
		</Container>
	);
};

export default App;
