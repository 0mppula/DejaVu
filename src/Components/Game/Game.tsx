import { FC, useState } from 'react';
import Card from './Card';
import { GameContainer, GameTop, CardsContainer, StartButton } from './GameElements';

export type cardsArrayType = {
	name: string;
	icon: string;
};

const cardDeck: cardsArrayType[] = [
	{ name: 'bars', icon: '📊' },
	{ name: 'grow', icon: '📈' },
	{ name: 'shrink', icon: '📉' },
	{ name: 'money', icon: '💰' },
	{ name: 'card', icon: '💳' },
	{ name: 'bill', icon: '💵' },
	{ name: 'rich', icon: '🤑' },
	{ name: 'rocket', icon: '🚀' },
];

const Game: FC = () => {
	const [choiceOne, setChoiceOne] = useState<string | null>(null);
	const [choiceTwo, setChoiceTwo] = useState<string | null>(null);
	const [cards, setCards] = useState<cardsArrayType[] | null>(null);
	const [turns, setTurns] = useState<number>(0);

	// Shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardDeck, ...cardDeck].sort((a, b) => Math.random() - 0.5);

		setCards(shuffledCards);
		setTurns(0);
	};

	const handleCardFlip = () => {
		console.log(turns);
		setTurns(turns + 1);
	};

	return (
		<GameContainer>
			<GameTop>
				<p>Turns: {turns}</p>
				<StartButton onClick={shuffleCards}>Play</StartButton>
				<p>00:00:00</p>
			</GameTop>
			<CardsContainer>
				{cards?.map((card, index): any => (
					<Card key={index} card={card} handleCardFlip={handleCardFlip} />
				))}
			</CardsContainer>
		</GameContainer>
	);
};

export default Game;
