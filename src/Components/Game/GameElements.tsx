import styled from 'styled-components';
import cardImg from '../../images/card-back.jpg';

interface CardProps {
	flipped: boolean;
	card?: object;
}

interface CardContainerProps {
	notStarted: boolean;
}

export const GameContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const GameOverlay = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 5rem;
	z-index: 100;
	color: #00d646;
	top: 324px;
	right: 50%;
	transform: translate(50%, -50%);
	width: min(275px, 90%);
	height: min(125px, 50%);
	background: rgba(0.2, 0.2, 0.2, 0.5);
	border-radius: 4px;
`;

export const CardsContainer = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
	width: 100%;
`;

export const StartButton = styled.button`
	font-weight: 500;
	background-color: #d4e6f6a8;
	border-radius: 4px;
	cursor: pointer;
`;

export const GameTop = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;

	p,
	button {
		text-align: center;
		color: #222222;
		padding: 0rem 1rem;
		font-size: 2rem;
		width: min(150px, 33vw);
	}
`;

export const CardContainer = styled.div<CardContainerProps>`
	position: relative;
	opacity: ${(props) => (props.notStarted ? '0.5' : '1')};
	pointer-events: ${(props) => (props.notStarted ? 'none' : 'auto')};
`;

export const CardBack = styled.div<CardProps>`
	padding: 1rem;
	border: solid 2px #222222;
	width: 150px;
	height: 150px;
	background-color: white;
	border-radius: 4px;
	cursor: pointer;
	transition: all ease-in 0.2s;
	transition-delay: ${(props) => (props?.flipped ? '0s' : '0.2s')};
	transform: ${(props) => (props?.flipped ? 'rotateY(90deg)' : 'rotateY(0deg)')};
	background-image: url(${cardImg});
`;

export const CardFront = styled.div<CardProps>`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3.5rem;
	top: 0px;
	right: 0px;
	padding: 1rem;
	border: solid 2px #222222;
	width: 150px;
	height: 150px;
	background-color: white;
	border-radius: 4px;
	user-select: none;
	cursor: pointer;
	background-color: #967bb680;
	transition: all ease-in 0.2s;
	transition-delay: ${(props) => (props.flipped ? '0.2s' : '0s')};
	transform: ${(props) => (props.flipped ? 'rotateY(0deg)' : 'rotateY(90deg)')};
`;
