"use client";
import { createContext, useContext, useState } from "react";
import WinWindow from "./components/WinWindow/WinWindow";
import LoseWindow from "./components/LoseWindow/LoseWindow";
import Popup from "./components/Popup/Popup";

const GameContext = createContext();

export function useGame() {
	return useContext(GameContext);
}

export function GameProvider({ children, word, lang = "en", gameMode = "custom" }) {
	const [letters, setLetters] = useState(
		Array(5)
			.fill(null)
			.map(() => Array(5).fill(""))
	);

	const [currentRow, setCurrentRow] = useState(0);
	const [currentPosition, setCurrentPosition] = useState(0);

	const [numberOfRows, setNumberOfRows] = useState(5);
	const [numberOfLetters, setNumberOfLetters] = useState(5);

	const [guessResults, setGuessResults] = useState(
		Array(5)
			.fill(null)
			.map(() => Array(5).fill("var(--bg-color)"))
	);

	const [won, setWon] = useState(false);
	const [lost, setLost] = useState(false);
	const [notExists, setNotExists] = useState(false);
	return (
		<GameContext.Provider
			value={{
				letters,
				setLetters,
				currentRow,
				setCurrentRow,
				currentPosition,
				setCurrentPosition,
				guessResults,
				setGuessResults,
				word,
				won,
				setWon,
				lang,
				numberOfRows,
				setNumberOfRows,
				numberOfLetters,
				setNumberOfLetters,
				setNotExists,
				lost,
				setLost,
			}}
		>
			{children}
			{won && <WinWindow word={word} lang={lang} gameMode={gameMode} />}
			{lost && <LoseWindow word={word} lang={lang} gameMode={gameMode}/>}
			{notExists && (
				<Popup
					onRemove={() => setNotExists(false)}
					vertical="top"
					horizontal="right"
				>
					Слово не существует!
				</Popup>
			)}
		</GameContext.Provider>
	);
}
