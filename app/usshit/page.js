import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import { GameProvider } from "../GameProvider";
import { GetRandomWord } from "../api/utils";
import UsCursor from "../components/Сursour/Slavcursour/Uscursour/UsCursor";
import Image from 'next/image'
import TitleUs from '../components/TitleUs/TitleUs'
import styles from './page.module.scss'
export default async function USRandom() {
	const word = await GetRandomWord(5, "en");
	return (
		<div className="maincontainer">
			<GameProvider lang="en" word={word.toUpperCase()} gameMode="random">
				<UsCursor/>
				<TitleUs/>
				<Gamebar />
				<Keyboard />
			</GameProvider>
			<Image
					className={styles.imgrev1}
					src="/revolver.svg"
					alt=""
					width={700}
					height={700}
					
				/>
			<Image
					className={styles.imgrev2}
					src="/revolver.svg"
					alt=""
					width={700}
					height={700}
					
				/>
		</div>
	);
}
