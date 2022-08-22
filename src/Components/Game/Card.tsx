import { useState, FC } from 'react';
import { CardBack, CardContainer, CardFront } from './GameElements';
import { cardsArrayType } from './Game';

interface Props {
	card: cardsArrayType;
	handleCardFlip: () => void;
}

const Card: FC<Props> = ({ card, handleCardFlip }) => {
	const [flipped, setFlipped] = useState<boolean>(false);
	const handleFlip = () => {};

	return (
		<CardContainer onClick={handleCardFlip}>
			<CardBack flipped={flipped} />
			<CardFront flipped={flipped} card={card} />
		</CardContainer>
	);
};

export default Card;
