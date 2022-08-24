import { FC } from 'react';
import { CardBack, CardContainer, CardFront } from './GameElements';
import { cardsArrayType } from './Game';

interface Props {
	card: cardsArrayType;
	flipped: boolean;
	handleChoice: (card: cardsArrayType) => void;
	disabled: boolean;
}

const Card: FC<Props> = ({ card, flipped, disabled, handleChoice }) => {
	const handleClick = (card: cardsArrayType): void => {
		if (!disabled) {
			handleChoice(card);
		}
	};

	return (
		<CardContainer onClick={() => handleClick(card)}>
			<CardBack flipped={flipped} />
			<CardFront flipped={flipped} card={card}>
				{card.icon}
			</CardFront>
		</CardContainer>
	);
};

export default Card;
