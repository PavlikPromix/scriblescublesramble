'use client';
import Gamebar from "../../components/Gamebar/Gamebar";
import Keyboard from "../../components/Keyboard/Keyboard";
import { GameProvider } from "../../GameProvider";
import { useEffect, useState } from "react";
import { decryptString } from "../../elcrypto";

export default function USCustom({ params }) {
	const [word, setWord] = useState("")
	const [error, setError] = useState(false)

	useEffect(() =>{
		const res = fetch(`/api/getWordById/${params.game}`)
			.then(r => {
				if(r.status == 200) {
					setError(false)
					return r.json();
				}
				else {
					setError(true)
					return;
				}
			})
			.then(r => {
				if(r) {
					setWord(decryptString(r.word, Buffer.from(r.key, "hex"), Buffer.from(r.iv, "hex")));
				}
			})
	}, [params.game])
	return (
		<div className="maincontainer">
			<GameProvider>
				<Gamebar word={word} />
				<Keyboard word={word} />
			</GameProvider>
		</div>
	);
}
