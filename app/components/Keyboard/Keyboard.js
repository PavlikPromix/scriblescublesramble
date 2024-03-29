"use client";
import styles from "./Keyboard.module.scss";
import Letter from "./Letters/Letter";
import { useGame } from "../../GameProvider";
import { useEffect, useState } from "react";

function Keyboard({ lang = "en" }) {
	const {
		letters,
		setLetters,
		currentRow,
		setCurrentRow,
		currentPosition,
		setCurrentPosition,
		guessResults,
		setGuessResults,
		word,
	} = useGame();
	const numberOfRows = 5;
	const numberOfLetters = 5;
	const [letterStatuses, setLetterStatuses] = useState({});

	useEffect(() => {
		const aggregateGuessResults = () => {
			const aggregatedResults = {};
			letters.forEach((row, rowIndex) => {
				row.forEach((char, index) => {
					if (char === "" 
						|| aggregatedResults[char.toUpperCase()] == "var(--correct)" 
						|| aggregatedResults[char.toUpperCase()] == "var(--incorrect)") 
						return;

					if (aggregatedResults[char.toUpperCase()] == "var(--exists)" 
						&& guessResults[rowIndex][index] !== "var(--correct)") 
						return;
					
					aggregatedResults[char.toUpperCase()] =
						guessResults[rowIndex][index];
				});
			});
			return aggregatedResults;
		};

		setLetterStatuses(aggregateGuessResults());
	}, [guessResults, letters]);

	const validateGuess = () => {
		const guess = letters[currentRow];
		const newGuessResults = [...guessResults];

		newGuessResults[currentRow] =
			Array(numberOfLetters).fill("var(--bg-color)");

		for (let i = 0; i < word.length; i++) {
			if (guess[i] === word[i]) {
				newGuessResults[currentRow][i] = "var(--correct)";
			} else if (word.includes(guess[i])) {
				newGuessResults[currentRow][i] = "var(--exists)";
			} else {
				newGuessResults[currentRow][i] = "var(--incorrect)";
			}
		}

		setGuessResults(newGuessResults);
	};

	const inputHandler = (key) => {
		if (key == "←") {
			setLetters((prevLetters) => {
				const newLetters = [...prevLetters];
				let newPos = currentPosition - 1;
				if (newPos >= 0) {
					newLetters[currentRow][newPos] = "";
				} else {
					newPos = 0;
				}
				setCurrentPosition(newPos);
				return newLetters;
			});
		} else if (key === "⏎") {
			if (currentPosition == numberOfLetters) {
				setLetters((prevLetters) => {
					const newLetters = [...prevLetters];
					if (currentRow < numberOfRows - 1) {
						newLetters[currentRow + 1] =
							Array(numberOfLetters).fill("");
						setCurrentRow(currentRow + 1);
						setCurrentPosition(0);
					}
					return newLetters;
				});
				validateGuess();
			}
		} else {
			setLetters((prevLetters) => {
				const newLetters = [...prevLetters];
				if (currentPosition < numberOfLetters) {
					newLetters[currentRow][currentPosition] = key;
					setCurrentPosition(currentPosition + 1);
				}
				return newLetters;
			});
		}
	};

	const ruKeyboard = [
		["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
		["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
		["←", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "⏎"],
	];

	const enKeyboard = [
		["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
		["A", "S", "D", "F", "G", "H", "J", "K", "L"],
		["←", "Z", "X", "C", "V", "B", "N", "M", "⏎"],
	];

	const renderRow = (keys, rowClass) => (
		<div key={rowClass} className={rowClass}>
			{keys.map((key, index) => (
				<Letter
					key={index}
					on_click={() => inputHandler(key)}
					bgcolor={
						key !== "←" && key !== "⏎"
							? letterStatuses[key.toUpperCase()]
							: undefined
					}
				>
					{key}
				</Letter>
			))}
		</div>
	);

	return (
		<div className={styles.keyboard}>
			{(lang === "ru" ? ruKeyboard : enKeyboard).map((row, index) =>
				renderRow(
					row,
					`${styles["keyboard-row"]} ${
						styles[`row${index + 1}${lang}`]
					}`
				)
			)}
		</div>
	);
}
export default Keyboard;
