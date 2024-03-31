"use client";
import React from "react";
import styles from "./Buttonchik.module.scss";
import { useRouter } from "next/navigation";

export default function Buttonchik({
	children,
	onClick,
	redirect,
	width = "fit-content",
	height = "fit-content",
	fontSize = "1em",
	fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
}) {
	const router = useRouter();
	return (
		<button
			className={styles.button}
			style={{
				width,
				height,
				fontSize,
				fontFamily,
			}}
			onClick={redirect ? () => router.push(redirect) : onClick}
		>
			{children}
		</button>
	);
}
