import styles from "./game.module.scss";
import Buttonchik from "../components/Buttonchik/Buttonchik";

export default function GamePage() {
	return (
		<>
			<div className={styles.gamecontainer}>
				<div className={`${styles.rusland} ${styles.subcontainer}`}>
					<div className={styles.trans}>
						<Buttonchik width="70%" height="10%" fontSize="1.3em" redirect={"ru"}>
							СВОЯ РЕЧЪ
						</Buttonchik>
						<Buttonchik width="70%" height="10%" fontSize="1.3em" redirect={"slavshit"}>
							НЕЧАЯННОЕ СЛОВЪЦО
						</Buttonchik>
					</div>
				</div>
				<div className={`${styles.usland} ${styles.subcontainer}`}>
					<div className={styles.trans}>
						<Buttonchik width="70%" height="10%" fontSize="1.3em" redirect={"en"}>
							СВОЙ УОРД
						</Buttonchik>
						<Buttonchik width="70%" height="10%" fontSize="1.3em" redirect={"usshit"}>
							БОЙНЯ НА УАЙЛД ЗАПАДЕ
						</Buttonchik>
					</div>
				</div>
			</div>
		</>
	);
}
