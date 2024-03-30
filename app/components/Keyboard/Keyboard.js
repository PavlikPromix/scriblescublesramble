"use client";
import styles from "./Keyboard.module.scss";
import Letter from "./Letters/Letter";
import { useGame } from "../../GameProvider";
import { useEffect, useState } from "react";

async function CheckWord(word, lang) {
	const res = await fetch(`/api/checkword/${lang}-${lang}/${word}`);
	const data = await res.json();
	return data;
}

function Keyboard({  }) {
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
		won,
		setWon,
		lang,
		numberOfRows, 
		numberOfLetters,
		setNotExists,
	} = useGame();
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

	const validateGuess = async () => {
		const guess = letters[currentRow];
		const newGuessResults = [...guessResults];

		const isRealWord = await CheckWord(guess.join(""), lang).then(
			(data) => {
				return data;
			}
		);
		if (!isRealWord) {
			setNotExists(true);
			return false;
		}

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

		if (guess.join("") === word) {
			setWon(true);
		}

		return true;
	};

	const inputHandler = async (key) => {
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
				const valid = await validateGuess();
				if (!valid) return;
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
