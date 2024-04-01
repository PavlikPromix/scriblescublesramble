import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import Ownword from "../components/Ownword/Ownword";
import { GameProvider } from "../GameProvider";
import Image from 'next/image'
import styles from './page.module.scss'
import UsCursor from "../components/Сursour/Slavcursour/Uscursour/UsCursor";
import TitleUs from "../components/TitleUs/TitleUs";

export default function USPreCustom() {
	return (
		<>
			<div className="maincontainer">
				<GameProvider lang="en">
					<UsCursor/>
					<TitleUs/>
					<Ownword />
					<Gamebar isActive={false} />
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
		</>
	);
}
