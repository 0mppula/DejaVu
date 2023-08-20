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
				<span>
					Developed by{' '}
					<a href="https://www.omarkraidie.com" target="_blank" rel="noopener noreferrer">
						Omar Kraidié
					</a>
				</span>
			</Footer>
		</>
	);
};

export default App;
