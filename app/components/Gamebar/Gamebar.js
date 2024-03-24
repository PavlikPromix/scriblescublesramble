import styles from "./Gamebar.module.scss";
import Letterbox from "../Letterbox/Letterbox";
function Gamebar({}) {
	return (
		<div className={styles.gamebar}>
			<div className={styles.gamebar_row}>
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
			</div>
			<div className={styles.gamebar_row}>
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
			</div>
			<div className={styles.gamebar_row}>
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
			</div>
			<div className={styles.gamebar_row}>
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
			</div>
			<div className={styles.gamebar_row}>
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
				<Letterbox />
			</div>
		</div>
	);
}
export default Gamebar;
