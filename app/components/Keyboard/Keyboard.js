'use client'
import styles from "./Keyboard.module.scss";
import Letter from "./Letters/Letter";
import { useGame } from "../../GameProvider";
import { useState } from "react";

function Keyboard({lang}) {
	const { letters, setLetters, currentRow, setCurrentRow, currentPosition, setCurrentPosition } = useGame();
	const numberOfRows = 5;
	const numberOfLetters = 5;
	const inputHandler = (key) => {
		if (key == '←') {
			setLetters((prevLetters) => {
				const newLetters = [...prevLetters];
				let newPos = currentPosition - 1;
				if (newPos >= 0) {
					newLetters[currentRow][newPos] = '';
				} else {
					newPos = 0;
				}
				setCurrentPosition(newPos);
				return newLetters;
			});
		}
		else if (key === "⏎") {
			if (currentPosition == numberOfLetters) {
				setLetters((prevLetters) => {
					const newLetters = [...prevLetters];
					if (currentRow < numberOfRows - 1) {
						newLetters[currentRow + 1] =
							Array(numberOfLetters).fill('');
						setCurrentRow(currentRow + 1);
						setCurrentPosition(0);
					}
					return newLetters;
				});
			}
		}
		else {
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

	return (
		lang == "ru" ?
		<div className={styles.keyboard}>
			<div className={`${styles["keyboard-row"]} ${styles.row1ru}`}>
				<Letter on_click={() => inputHandler("Й")}>Й</Letter>
				<Letter on_click={() => inputHandler("Ц")}>Ц</Letter>
				<Letter on_click={() => inputHandler("У")}>У</Letter>
				<Letter on_click={() => inputHandler("К")}>К</Letter>
				<Letter on_click={() => inputHandler("Е")}>Е</Letter>
				<Letter on_click={() => inputHandler("Н")}>Н</Letter>
				<Letter on_click={() => inputHandler("Г")}>Г</Letter>
				<Letter on_click={() => inputHandler("Ш")}>Ш</Letter>
				<Letter on_click={() => inputHandler("Щ")}>Щ</Letter>
				<Letter on_click={() => inputHandler("З")}>З</Letter>
				<Letter on_click={() => inputHandler("Х")}>Х</Letter>
				<Letter on_click={() => inputHandler("Ъ")}>Ъ</Letter>
			</div>
			<div className={`${styles["keyboard-row"]} ${styles.row2ru}`}>
				<Letter on_click={() => inputHandler("Ф")}>Ф</Letter>
				<Letter on_click={() => inputHandler("Ы")}>Ы</Letter>
				<Letter on_click={() => inputHandler("В")}>В</Letter>
				<Letter on_click={() => inputHandler("А")}>А</Letter>
				<Letter on_click={() => inputHandler("П")}>П</Letter>
				<Letter on_click={() => inputHandler("Р")}>Р</Letter>
				<Letter on_click={() => inputHandler("О")}>О</Letter>
				<Letter on_click={() => inputHandler("Л")}>Л</Letter>
				<Letter on_click={() => inputHandler("Д")}>Д</Letter>
				<Letter on_click={() => inputHandler("Ж")}>Ж</Letter>
				<Letter on_click={() => inputHandler("Э")}>Э</Letter>
			</div>
			<div className={`${styles["keyboard-row"]} ${styles.row3ru}`}>
				<Letter on_click={() => inputHandler("←")}>←</Letter>
				<Letter on_click={() => inputHandler("Я")}>Я</Letter>
				<Letter on_click={() => inputHandler("Ч")}>Ч</Letter>
				<Letter on_click={() => inputHandler("С")}>С</Letter>
				<Letter on_click={() => inputHandler("М")}>М</Letter>
				<Letter on_click={() => inputHandler("И")}>И</Letter>
				<Letter on_click={() => inputHandler("Т")}>Т</Letter>
				<Letter on_click={() => inputHandler("Ь")}>Ь</Letter>
				<Letter on_click={() => inputHandler("Б")}>Б</Letter>
				<Letter on_click={() => inputHandler("Ю")}>Ю</Letter>
				<Letter on_click={() => inputHandler("⏎")}>⏎</Letter>
			</div>
		</div>
		:
		<div className={styles.keyboard}>
			<div className={`${styles["keyboard-row"]} ${styles.row1}`}>
				<Letter on_click={() => inputHandler("Q")}>Q</Letter>
				<Letter on_click={() => inputHandler("W")}>W</Letter>
				<Letter on_click={() => inputHandler("E")}>E</Letter>
				<Letter on_click={() => inputHandler("R")}>R</Letter>
				<Letter on_click={() => inputHandler("T")}>T</Letter>
				<Letter on_click={() => inputHandler("Y")}>Y</Letter>
				<Letter on_click={() => inputHandler("U")}>U</Letter>
				<Letter on_click={() => inputHandler("I")}>I</Letter>
				<Letter on_click={() => inputHandler("O")}>O</Letter>
				<Letter on_click={() => inputHandler("P")}>P</Letter>
			</div>
			<div className={`${styles["keyboard-row"]} ${styles.row2}`}>
				<Letter on_click={() => inputHandler("A")}>A</Letter>
				<Letter on_click={() => inputHandler("S")}>S</Letter>
				<Letter on_click={() => inputHandler("D")}>D</Letter>
				<Letter on_click={() => inputHandler("F")}>F</Letter>
				<Letter on_click={() => inputHandler("G")}>G</Letter>
				<Letter on_click={() => inputHandler("H")}>H</Letter>
				<Letter on_click={() => inputHandler("J")}>J</Letter>
				<Letter on_click={() => inputHandler("K")}>K</Letter>
				<Letter on_click={() => inputHandler("L")}>L</Letter>
			</div>
			<div className={`${styles["keyboard-row"]} ${styles.row3}`}>
				<Letter on_click={() => inputHandler("←")}>←</Letter>
				<Letter on_click={() => inputHandler("Z")}>Z</Letter>
				<Letter on_click={() => inputHandler("X")}>X</Letter>
				<Letter on_click={() => inputHandler("C")}>C</Letter>
				<Letter on_click={() => inputHandler("V")}>V</Letter>
				<Letter on_click={() => inputHandler("B")}>B</Letter>
				<Letter on_click={() => inputHandler("N")}>N</Letter>
				<Letter on_click={() => inputHandler("M")}>M</Letter>
				<Letter on_click={() => inputHandler("⏎")}>⏎</Letter>
			</div>
		</div>
	);
}
export default Keyboard;
