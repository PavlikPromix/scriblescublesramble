import styles from "./WinWindow.module.scss";
import Buttonchik from "../Buttonchik/Buttonchik";

export default function WinWindow({ word, lang, gameMode }) {
	return (
		<div className={styles.container}>
			<div className={styles.panel}>
				<h1 className={styles.title}>
					{lang == "ru" ? "ВЫ СЛАВУ ОБРЕЛИ!" : "Ю ГАТ ЗЭ ВИН!"}
				</h1>
				<div className={styles.info}>
					<p className={styles.text}>
						{lang == "ru" ? "Таённое слово:" : "Хидден уорд:"}
					</p>
					<p className={styles.word}>{word}</p>
				</div>
				<div className={styles.buttons}>
					<Buttonchik
						width="50%"
						redirect={
							gameMode == "custom"
								? lang == "ru"
									? "/ru"
									: "/en"
								: lang == "ru"
									? "/slavshit"
									: "/usshit"
						}
					>
						{lang == "ru" ? "НОВО СЛОВО" : "НЬЮ ДЖЕРСИ"}
					</Buttonchik>
					<Buttonchik width="50%" redirect={"/game"}>
						{lang == "ru" ? "В ЧЕРТОГ" : "ТУ ЮЭСЭЙ"}
					</Buttonchik>
				</div>
			</div>
		</div>
	);
}
