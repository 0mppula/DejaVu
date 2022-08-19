import { FC, useState } from 'react';
import Card from './Card';
import { GameContainer } from './GameElements';

type cardsType = {
	name: string;
	icon: string;
};

interface Provider {
	connected: boolean;
	type: string;
}

const Game: FC = () => {
	const [choiceOne, setChoiceOne] = useState<string | null>(null);
	const [choiceTwo, setChoiceTwo] = useState<string | null>(null);

	const cards: cardsType[] = [
		{ name: 'bars', icon: '📊' },
		{ name: 'grow', icon: '📈' },
		{ name: 'shrink', icon: '📉' },
		{ name: 'money', icon: '💰' },
		{ name: 'card', icon: '💳' },
		{ name: 'bill', icon: '💵' },
		{ name: 'rich', icon: '🤑' },
		{ name: 'rocket', icon: '🚀' },
	];

	return (
		<GameContainer>
			<Card />
		</GameContainer>
	);
};

export default Game;
