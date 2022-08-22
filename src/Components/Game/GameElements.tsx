import styled from 'styled-components';
import cardImg from '../../images/card-back.jpg';

interface CardProps {
	flipped: boolean;
	card?: object;
}

interface CardContainerProps {
	// onClick: () => void;
}

export const GameContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
	width: 100%;
`;

export const StartButton = styled.button`
	font-weight: 500;
	background-color: #d4e6f6a8;
	cursor: pointer;
`;

export const GameTop = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;

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
	top: 0px;
	right: 0px;
	padding: 1rem;
	border: solid 2px #222222;
	width: 150px;
	height: 150px;
	background-color: white;
	border-radius: 4px;
	cursor: pointer;
	background-color: #ccc;
	transition: all ease-in 0.2s;
	transition-delay: ${(props) => (props.flipped ? '0.2s' : '0s')};
	transform: ${(props) => (props.flipped ? 'rotateY(0deg)' : 'rotateY(90deg)')};
`;
