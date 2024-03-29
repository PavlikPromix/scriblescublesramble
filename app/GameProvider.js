'use client';
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function useGame() {
	return useContext(GameContext);
}

export function GameProvider({ children, word }) {
	const [letters, setLetters] = useState(
		Array(5)
			.fill(null)
			.map(() => Array(5).fill(""))
	);
	const [currentRow, setCurrentRow] = useState(0);
	const [currentPosition, setCurrentPosition] = useState(0);
	const [guessResults, setGuessResults] = useState(
		Array(5)
			.fill(null)
			.map(() => Array(5).fill("var(--bg-color)"))
	);
	const [won, setWon] = useState(false)
	return (
		<GameContext.Provider value={{ letters, setLetters, currentRow, setCurrentRow, currentPosition, setCurrentPosition, guessResults, setGuessResults, word, won }}>
			{children}
		</GameContext.Provider>
	);
}
