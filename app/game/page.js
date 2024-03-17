import styles from "./game.module.scss";
import Buttonchik from "../components/Buttonchik/Buttonchik";

export default function GamePage() {
	return (
		<>
			<div className={styles.gamecontainer}>
				<div className={`${styles.rusland} ${styles.subcontainer}`}>
					<div className={styles.trans}>
						<Buttonchik redirect={"randomru"}>
							ПРОБРОСИТЬ СВОЁ СЛОВЦО
						</Buttonchik>
						<Buttonchik redirect={"slavshit"}>
							СЛАВЯНСКОЕ ПОБОИЩЕ
						</Buttonchik>
					</div>
				</div>
				<div className={`${styles.usland} ${styles.subcontainer}`}>
					<div className={styles.trans}>
						<Buttonchik redirect={"randomus"}>
							СВОЁ СЛОВО
						</Buttonchik>
						<Buttonchik redirect={"usshit"}>
							БОЙНЯ НА ДИКОМ ЗАПАДЕ
						</Buttonchik>
					</div>
				</div>
			</div>
		</>
	);
}
