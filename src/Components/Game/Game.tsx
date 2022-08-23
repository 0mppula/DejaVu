import { FC, useState, useEffect } from 'react';
import Card from './Card';
import { GameContainer, GameTop, CardsContainer, StartButton } from './GameElements';

export type cardsArrayType = {
	name: string;
	icon: string;
	matched: boolean;
};

const cardDeck: cardsArrayType[] = [
	{ name: 'bars', icon: '📊', matched: false },
	{ name: 'grow', icon: '📈', matched: false },
	{ name: 'shrink', icon: '📉', matched: false },
	{ name: 'money', icon: '💰', matched: false },
	{ name: 'card', icon: '💳', matched: false },
	{ name: 'bill', icon: '💵', matched: false },
	{ name: 'rich', icon: '🤑', matched: false },
	{ name: 'rocket', icon: '🚀', matched: false },
];

const Game: FC = () => {
	const [choiceOne, setChoiceOne] = useState<cardsArrayType | null>(null);
	const [choiceTwo, setChoiceTwo] = useState<cardsArrayType | null>(null);
	const [cards, setCards] = useState<cardsArrayType[] | null>(null);
	const [turns, setTurns] = useState<number>(0);
	const [gameActive, setGameActive] = useState<boolean>(false);

	useEffect((): void => {
		if (choiceOne && choiceTwo && cards) {
			if (choiceOne.name === choiceTwo.name) {
				let newCards: cardsArrayType[] = cards.map((card) => {
					if (card.name === choiceOne.name) {
						return { ...card, matched: true };
					} else {
						return { ...card };
					}
				});

				setCards(newCards);

				resetTurn();
			} else {
				resetTurn();
			}
		}
	}, [choiceOne, choiceTwo]);

	// Shuffle cards
	const shuffleCards = (): void => {
		const shuffledCards = [...cardDeck, ...cardDeck]
			.sort((a, b) => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCards(shuffledCards);
		setTurns(0);
	};

	const handleChoice = (card: cardsArrayType): void => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	const resetTurn = (): void => {
		setChoiceOne(null);
		setChoiceTwo(null);
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
					<Card
						key={index}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
					/>
				))}
			</CardsContainer>
		</GameContainer>
	);
};

export default Game;
