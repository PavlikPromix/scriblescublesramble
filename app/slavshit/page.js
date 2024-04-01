import { GameProvider } from "../GameProvider";
import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import CustomCursor from "../components/Сursour/Slavcursour/Slavcursour";
import { GetRandomWord } from "../api/utils";
import styles from './page.module.scss'
import Image from 'next/image'
import TitleRu from '../components/TitleRu/TitleRu'
export default async function RuRandom() {
	const word = await GetRandomWord(5, "ru");
	return (
		<div className="maincontainer">
			<CustomCursor />
			<GameProvider word={word.toUpperCase()} lang="ru">
				<TitleRu/>
				<Gamebar />
				<Keyboard />
			</GameProvider>
			<Image
					className={styles.imgtop1}
					src="/topor.svg"
					alt=""
					width={700}
					height={600}
					
				/>
			<Image
					className={styles.imgtop2}
					src="/topor.svg"
					alt=""
					width={700}
					height={600}
					
				/>
			<Image
					className={styles.img1}
					width={80}
					height={100}
					src="/rusi.svg"
					alt=""
				/>
			<Image
					className={styles.img2}
					width={80}
					height={100}
					src="/rusi.svg"
					alt=""
				/> 
		</div>
	);
}
