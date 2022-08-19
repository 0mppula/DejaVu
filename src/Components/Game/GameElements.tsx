import styled from 'styled-components';
import cardImg from '../../images/card-back.jpg';

interface CardProps {
	flipped: boolean;
}

interface CardContainerProps {
	onClick: () => void;
}

export const GameContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
	width: 100%;
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
