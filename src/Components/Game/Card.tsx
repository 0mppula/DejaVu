import { FC } from 'react';
import { CardBack, CardContainer, CardFront } from './GameElements';
import { cardsArrayType } from './Game';

interface Props {
	card: cardsArrayType;
	flipped: boolean;
	handleChoice: (card: cardsArrayType) => void;
	disabled: boolean;
	notStarted: boolean;
}

const Card: FC<Props> = ({ card, flipped, disabled, notStarted, handleChoice }) => {
	const handleClick = (card: cardsArrayType): void => {
		if (!disabled) {
			handleChoice(card);
		}
	};

	return (
		<CardContainer notStarted={notStarted} onClick={() => handleClick(card)}>
			<CardBack flipped={flipped} />
			<CardFront flipped={flipped} card={card}>
				{card.icon}			
			</CardFront>
		</CardContainer>
	);
};

export default Card;
