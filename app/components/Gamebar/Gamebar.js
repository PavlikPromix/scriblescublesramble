"use client";
import React, { useState, useEffect, useMemo } from "react";
import styles from "./Gamebar.module.scss";
import Letterbox from "../Letterbox/Letterbox";
import { useGame } from "../../GameProvider";

function Gamebar({ lang, isActive = true, word }) {
	const numberOfRows = 5;
	const numberOfLetters = 5;
	const { letters, setLetters, currentRow, setCurrentRow, currentPosition, setCurrentPosition } = useGame();

	const qwertyToCyrillicMapping = useMemo(() => {
		return {
			A: "Ф",
			B: "И",
			C: "С",
			D: "В",
			E: "У",
			F: "А",
			G: "П",
			H: "Р",
			I: "Ш",
			J: "О",
			K: "Л",
			L: "Д",
			M: "Ь",
			N: "Т",
			O: "Щ",
			P: "З",
			Q: "Й",
			R: "К",
			S: "Ы",
			T: "Е",
			U: "Г",
			V: "М",
			W: "Ц",
			X: "Ч",
			Y: "Н",
			Z: "Я",
			"[": "Х",
			"]": "Ъ",
			";": "Ж",
			"'": "Э",
			",": "Б",
			".": "Ю",
		};
	}, []);

	const cyrillicToQwertyMapping = Object.fromEntries(
		Object.entries(qwertyToCyrillicMapping).map(([k, v]) => [v, k])
	);

	const checkWord = (word) => {
		return word.toUpperCase() == word;
	};

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (isActive == false) return;
			if (event.key === "Backspace") {
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
			} else if (event.key === "Enter" && currentPosition == numberOfLetters) {
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
			} else {
				let key = event.key.toUpperCase();

				const mapping =
					lang == "ru"
						? qwertyToCyrillicMapping
						: cyrillicToQwertyMapping;
				if (mapping.hasOwnProperty(key)) {
					key = mapping[key];
				}

				if (
					key.length === 1 &&
					((key >= "A" && key <= "Z") || (key >= "А" && key <= "Я"))
				) {
					setLetters((prevLetters) => {
						const newLetters = [...prevLetters];
						if (currentPosition < numberOfLetters) {
							newLetters[currentRow][currentPosition] = key;
							setCurrentPosition(currentPosition + 1);
						}
						return newLetters;
					});
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		currentPosition,
		currentRow,
		cyrillicToQwertyMapping,
		lang,
		qwertyToCyrillicMapping,
		isActive,
		setLetters, 
		setCurrentPosition, 
		setCurrentRow
	]);

	return (
		<div className={styles.gamebar}>
			{letters.map((rowLetters, rowIndex) => (
				<div key={rowIndex} className={styles.gamebar_row}>
					{rowLetters.map((letter, letterIndex) => (
						<Letterbox key={letterIndex} value={letter} />
					))}
				</div>
			))}
		</div>
	);
}

export default Gamebar;
