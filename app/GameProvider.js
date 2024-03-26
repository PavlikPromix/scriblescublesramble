'use client';
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function useGame() {
	return useContext(GameContext);
}

export function GameProvider({ children }) {
	const [letters, setLetters] = useState(
		Array(5)
			.fill(null)
			.map(() => Array(5).fill(""))
	);
	const [currentRow, setCurrentRow] = useState(0);
	const [currentPosition, setCurrentPosition] = useState(0);
	return (
		<GameContext.Provider value={{ letters, setLetters, currentRow, setCurrentRow, currentPosition, setCurrentPosition }}>
			{children}
		</GameContext.Provider>
	);
}
