"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Inputbar.module.scss";

function Inputbar({ length = 5 }) {
	const [inputValues, setInputValues] = useState(Array(length).fill(""));
	const inputRefs = useRef([]);

	useEffect(() => {
		setInputValues(Array(length).fill(""));
		inputRefs.current = inputRefs.current.slice(0, length);
	}, [length]);

	const handleInput = (index) => {
		return (e) => {
			const uppercaseValue = e.target.value.toUpperCase();
			const newValues = [...inputValues];
			newValues[index] = uppercaseValue;
			setInputValues(newValues);

			if (index < length - 1 && uppercaseValue) {
				inputRefs.current[index + 1].focus();
			}
		};
	};

	const handleKeyDown = (index) => {
		return (e) => {
			if (e.key === "Backspace" && !inputValues[index]) {
				const newValues = [...inputValues];
				newValues[index] = "";
				setInputValues(newValues);

				if (index > 0) {
					inputRefs.current[index - 1].focus();
				}
			}
		};
	};

	const inputs = Array.from({ length }, (_, index) => (
		<input
			ref={(el) => (inputRefs.current[index] = el)}
			className={styles.letter}
			key={index}
			maxLength={1}
			size={1}
			value={inputValues[index]}
			onInput={handleInput(index)}
			onKeyDown={handleKeyDown(index)}
			style={{ textTransform: "uppercase" }}
		/>
	));

	return <div className={styles.letterContainer}>{inputs}</div>;
}

export default Inputbar;
