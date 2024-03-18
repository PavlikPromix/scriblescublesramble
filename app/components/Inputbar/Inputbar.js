"use client";
import styles from "./Inputbar.module.scss";
import { useState } from "react";

function Inputbar({ children, length }) {
	const [letters, setletters] = useState([
		<input className={styles.letter} key={0} maxLength={1} size={1} />,
		<input className={styles.letter} key={1} maxLength={1} size={1} />,
		<input className={styles.letter} key={2} maxLength={1} size={1} />,
		<input className={styles.letter} key={3} maxLength={1} size={1} />,
		<input className={styles.letter} key={4} maxLength={1} size={1} />,
	]);
	if (length > 5) {
		for (let i = 5; i < length; i++) {
			setletters([
				...letters,
				<input
					className={styles.letter}
					key={i}
					maxLength={1}
					size={1}
				/>,
			]);
		}
	}
	return (
		<>
			<div className={styles.letterContainer}>
				{letters.map((letter, index) => {
                    return letter; 
				})}
			</div>
		</>
	);
}

export default Inputbar;
