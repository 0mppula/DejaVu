import { FC } from 'react';
import { CardBack, CardContainer, CardFront } from './GameElements';
import { cardsArrayType } from './Game';

interface Props {
	card: cardsArrayType;
	flipped: boolean;
	handleChoice: (card: cardsArrayType) => void;
}

const Card: FC<Props> = ({ card, flipped, handleChoice }) => {
	return (
		<CardContainer onClick={() => handleChoice(card)}>
			<CardBack flipped={flipped} />
			<CardFront flipped={flipped} card={card}>
				{card.icon}
			</CardFront>
		</CardContainer>
	);
};

export default Card;
