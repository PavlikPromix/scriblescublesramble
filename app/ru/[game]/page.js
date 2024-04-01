import Gamebar from "../../components/Gamebar/Gamebar";
import Keyboard from "../../components/Keyboard/Keyboard";
import { GameProvider } from "../../GameProvider";
import NotFound from "../../components/NotFound/NotFound";
import { GetWord } from "../../api/utils";
import Image from 'next/image'
import styles from './page.module.scss'
import TitleRu from "../../components/TitleRu/TitleRu";
import CustomCursor from "../../components/Сursour/Slavcursour/Slavcursour";
export default async function RuCustom({ params }) {
	const id = params.game;
	const { word , error } = await GetWord(id);
	return error ? (
		<NotFound />
	) : (
		<div className="maincontainer">
			<GameProvider word={word.toUpperCase()} lang="ru">
				<CustomCursor/>
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
		</div>
	);
}
