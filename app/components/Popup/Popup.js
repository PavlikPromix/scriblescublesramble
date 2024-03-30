"use client";
import { useState, useEffect } from "react";
import styles from "./Popup.module.scss";

export default function Popup({
	children,
	onRemove,
	vertical = "top",
	horizontal = "left",
	fontSize = "1em",
	fontWeight = "bold",
}) {
	const verticalStyle =
		vertical == "top" ? { top: "calc(1em + 80px)" } : { bottom: "1em" };
	const horizontalStyle =
		horizontal == "left" ? { left: "1em" } : { right: "1em" };

	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const removeTimer = setTimeout(() => onRemove(), 2900);
		return () => {
			clearTimeout(removeTimer);
		};
	}, [onRemove]);

	if (!visible) {
		return null;
	}

	return (
		<div
			className={styles.container}
			style={{
				...verticalStyle,
				...horizontalStyle,
				fontSize,
				fontWeight,
			}}
		>
			{children}
		</div>
	);
}
