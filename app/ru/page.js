import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import Ownword from "../components/Ownword/Ownword";
import { GameProvider } from "../GameProvider";
import CustomCursor from '../components/Сursour/Slavcursour/Slavcursour'
import Image from 'next/image'
import TitleRu from '../components/TitleRu/TitleRu'
import styles from './page.module.scss'
export default async function RuPreCustom() {
	return (
		<>
			<div className="maincontainer">
				<GameProvider lang="ru">
					<CustomCursor />
					<TitleRu/>
					<Ownword />
					<Gamebar isActive={false} />
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
		</>
	);
}
