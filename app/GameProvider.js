"use client";
import { createContext, useContext, useState } from "react";
import WinPopup from "./components/WinWindow/WinWindow";
import Popup from "./components/Popup/Popup";

const GameContext = createContext();

export function useGame() {
	return useContext(GameContext);
}

export function GameProvider({ children, word, lang = "en" }) {
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
				setNotExists
			}}
		>
			{children}
			{won && <WinPopup word={word} lang={lang} />}
			{notExists && <Popup onRemove={() => setNotExists(false)} vertical="top" horizontal="right">Слово не существует!</Popup>}
		</GameContext.Provider>
	);
}
