import { FC } from 'react';
import styled from 'styled-components';
import Game from './Components/Game/Game';

const Container = styled.div`
	padding-top: 1rem;
	display: flex;
	min-height: 100vh;
	width: min(768px, 93vw);
	margin: 0 auto;
	padding-bottom: 6rem;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.h1`
	font-size: 3rem;
	color: #222222;
`;

const Footer = styled.footer`
	background-color: #d4e6f6a8;
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 5rem 0 2rem 0;
	gap: 0.25rem;
	
	a,
	span {
		color: #222222;
	}
`;

const App: FC = () => {
	return (
		<>
			<Container>
				<Header>Déjà Vu</Header>
				<Game />
			</Container>

			<Footer>
				<span>Developed By:</span>
				<a href="https://github.com/0mppula" target="_blank" rel="noopener noreferrer">
					Omar Kraidié
				</a>
			</Footer>
		</>
	);
};

export default App;
