import styles from "./Keyboard.module.scss";
import Letter from "./Letters/Letter";
function Keyboard({lang}) {
	return (
		lang == "ru" ?
		<div className={styles.keyboard}>
			<div className={`${styles["keyboard-row"]} ${styles.row1ru}`}>
				<Letter>Й</Letter>
				<Letter>Ц</Letter>
				<Letter>У</Letter>
				<Letter>К</Letter>
				<Letter>Е</Letter>
				<Letter>Н</Letter>
				<Letter>Г</Letter>
				<Letter>Ш</Letter>
				<Letter>Щ</Letter>
				<Letter>З</Letter>
				<Letter>Х</Letter>
				<Letter>Ъ</Letter>
			</div>
			<div className={`${styles["keyboard-row"]} ${styles.row2ru}`}>
				<Letter>Ф</Letter>
				<Letter>Ы</Letter>
				<Letter>В</Letter>
				<Letter>А</Letter>
				<Letter>П</Letter>
				<Letter>Р</Letter>
				<Letter>О</Letter>
				<Letter>Л</Letter>
				<Letter>Д</Letter>
				<Letter>Ж</Letter>
				<Letter>Э</Letter>
			</div>
			<div className={`${styles["keyboard-row"]} ${styles.row3ru}`}>
				<Letter>{"←"}</Letter>
				<Letter>Я</Letter>
				<Letter>Ч</Letter>
				<Letter>С</Letter>
				<Letter>М</Letter>
				<Letter>И</Letter>
				<Letter>Т</Letter>
				<Letter>Ь</Letter>
				<Letter>Б</Letter>
				<Letter>Ю</Letter>
				<Letter>{"⏎"}</Letter>
			</div>
		</div>
		:
		<div className={styles.keyboard}>
			<div className={`${styles["keyboard-row"]} ${styles.row1}`}>
				<Letter>Q</Letter>
				<Letter>W</Letter>
				<Letter>E</Letter>
				<Letter>R</Letter>
				<Letter>T</Letter>
				<Letter>Y</Letter>
				<Letter>U</Letter>
				<Letter>I</Letter>
				<Letter>O</Letter>
				<Letter>P</Letter>
			</div>
			<div className={`${styles["keyboard-row"]} ${styles.row2}`}>
				<Letter>A</Letter>
				<Letter>S</Letter>
				<Letter>D</Letter>
				<Letter>F</Letter>
				<Letter>G</Letter>
				<Letter>H</Letter>
				<Letter>J</Letter>
				<Letter>K</Letter>
				<Letter>L</Letter>
			</div>
			<div className={`${styles["keyboard-row"]} ${styles.row3}`}>
				<Letter>{"←"}</Letter>
				<Letter>Z</Letter>
				<Letter>X</Letter>
				<Letter>C</Letter>
				<Letter>V</Letter>
				<Letter>B</Letter>
				<Letter>N</Letter>
				<Letter>M</Letter>
				<Letter>{"⏎"}</Letter>
			</div>
		</div>
	);
}
export default Keyboard;
