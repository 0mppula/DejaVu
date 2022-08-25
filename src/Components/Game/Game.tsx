import { FC, useState, useEffect } from 'react';
import Card from './Card';
import { GameContainer, GameTop, CardsContainer, StartButton, GameOverlay } from './GameElements';

export type cardsArrayType = {
	id: number;
	name: string;
	icon: string;
	matched: boolean;
};

const cardDeck: cardsArrayType[] = [
	{ id: 0, name: 'bars', icon: '📊', matched: false },
	{ id: 0, name: 'grow', icon: '📈', matched: false },
	{ id: 0, name: 'shrink', icon: '📉', matched: false },
	{ id: 0, name: 'money', icon: '💰', matched: false },
	{ id: 0, name: 'card', icon: '💳', matched: false },
	{ id: 0, name: 'bill', icon: '💵', matched: false },
	{ id: 0, name: 'rich', icon: '🤑', matched: false },
	{ id: 0, name: 'rocket', icon: '🚀', matched: false },
];

const Game: FC = () => {
	const [choiceOne, setChoiceOne] = useState<cardsArrayType | null>(null);
	const [choiceTwo, setChoiceTwo] = useState<cardsArrayType | null>(null);
	const [cards, setCards] = useState<cardsArrayType[] | null>(null);
	const [turns, setTurns] = useState<number>(0);
	const [disabled, setDisabled] = useState<boolean>(false);
	const [gameActive, setGameActive] = useState<boolean>(false);
	const [gameTime, setGameTime] = useState<number>(0);

	// Initialize the game on first render
	useEffect(() => {
		shuffleCards(true);
	}, []);

	// Update the games timer
	useEffect((): (() => void) => {
		let timer: any;
		if (gameActive) {
			timer = setInterval(() => setGameTime((time) => time + 100), 100);
		}

		return () => clearInterval(timer);
	}, [gameActive]);

	useEffect((): void => {
		if (choiceOne && choiceTwo && cards) {
			setDisabled(true);
			if (choiceOne.name === choiceTwo.name) {
				let newCards: cardsArrayType[] = cards.map((card) => {
					if (card.name === choiceOne.name) {
						return { ...card, matched: true };
					} else {
						return { ...card };
					}
				});

				setCards(newCards);

				if (newCards.every((card) => card.matched)) {
					setGameActive(false);
				}

				setTurns(turns + 1);
				resetTurn();
			} else {
				setTurns(turns + 1);
				setTimeout(() => resetTurn(), 1000);
			}
		}
		// eslint-disable-next-line
	}, [choiceOne, choiceTwo]);

	// Shuffle cards
	const shuffleCards = (init?: boolean): void => {
		const shuffledCards = [...cardDeck, ...cardDeck]
			.sort((a, b) => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setGameTime(0);
		setCards(shuffledCards);
		setTurns(0);

		!init && setGameActive(true);
	};

	const handleChoice = (card: cardsArrayType): void => {
		if (card.id === choiceOne?.id) return;
		if (card.matched) return;
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	const resetTurn = (): void => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setDisabled(false);
	};

	const printTimer = (): string => {
		// 00:00:00
		let time;
		let mins: number | string = Math.floor(gameTime / 1000 / 60);
		let secs: number | string = Math.floor((gameTime / 1000) % 60);
		let cs = (gameTime / 100) % 10;

		if (mins < 10) {
			mins = `0${mins}`;
		}
		if (secs < 10) {
			secs = `0${secs}`;
		}
		time = `${mins}:${secs}:${cs}0`;

		return time;
	};

	return (
		<GameContainer>
			<GameTop>
				<p>Turns: {turns}</p>
				<StartButton onClick={() => shuffleCards()}>
					{gameActive ? 'Restart' : 'Start Game'}
				</StartButton>
				<p>{printTimer()}</p>
			</GameTop>

			<CardsContainer>
				{!gameActive && turns !== 0 && <GameOverlay>You Win!</GameOverlay>}
				{cards?.map((card, index): any => (
					<Card
						key={index}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled || (!card.matched && !gameActive)}
						notStarted={!card.matched && !gameActive}
					/>
				))}
			</CardsContainer>
		</GameContainer>
	);
};

export default Game;
