import Gamebar from "../../components/Gamebar/Gamebar";
import Keyboard from "../../components/Keyboard/Keyboard";
import { GameProvider } from "../../GameProvider";
import NotFound from "../../components/NotFound/NotFound";
import { GetWord } from "../../api/utils";
import UsCursor from '../../components/Сursour/Slavcursour/Uscursour/UsCursor'
import Image from 'next/image'
import styles from './page.module.scss'
import TitleUs from '../../components/TitleUs/TitleUs'
export default async function USCustom({ params }) {
	const id = params.game;
	const { word, error } = await GetWord(id);
	return error ? (
		<NotFound />
	) : (
		<div className="maincontainer">
			<UsCursor/>
			<GameProvider word={word.toUpperCase()} lang="en" gameMode="custom">
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
