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
}) {
	const router = useRouter();
	return redirect ? (
		<button
			className={styles.button}
			style={{ width: width, height: height, fontSize: fontSize }}
			onClick={() => router.push(redirect)}
		>
			{children}
		</button>
	) : (
		<button
			className={styles.button}
			style={{ width: width, height: height, fontSize: fontSize }}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
