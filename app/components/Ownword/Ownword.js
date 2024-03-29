"use client";
import styles from "./Ownword.module.scss";
import Inputbar from "../Inputbar/Inputbar";
import Buttonchik from "../Buttonchik/Buttonchik";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "../../GameProvider";

function Ownword() {
	const { lang } = useGame();
	const [word, setWord] = useState("");
	const router = useRouter();
	const handleInputChange = (word) => {
		setWord(word.toLowerCase());
	};

	const createWord = async () => {
		if (word.length != 5) return;
		const response = await fetch("/api/createCustomGame", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ word: word }),
		});
		const data = await response.json();
		router.push(lang == "ru" ? `/ru/${data.id}` : `/en/${data.id}`);
	};

	return (
		<div className={styles.owncontainer}>
			<div className={styles.panel}>
				<div className={styles.text}>
					{lang == "ru" ? "Избери слово, что желаешь таить (5 письмен)" : "Чуз словечко, которое хочется хайд (5 леттеров)"}
				</div>
				<Inputbar
					value={word}
					onChange={handleInputChange}
					lang={lang}
				/>
				<Buttonchik onClick={async () => await createWord()}>
					{lang == "ru" ? "Продолжити" : "Континуе"}
				</Buttonchik>
			</div>
		</div>
	);
}

export default Ownword;
