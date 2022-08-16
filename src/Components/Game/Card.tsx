import { useState } from 'react';
import { CardBack, CardContainer, CardFront } from './GameElements';

const Card = () => {
	const [flipped, setFlipped] = useState(false);
	const handleFlip = () => {};

	return (
		<CardContainer onClick={() => setFlipped(!flipped)}>
			<CardBack flipped={flipped} />
			<CardFront flipped={flipped} />
		</CardContainer>
	);
};

export default Card;
