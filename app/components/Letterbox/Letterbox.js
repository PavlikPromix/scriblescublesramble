import styles from "./Letterbox.module.scss";
function Letterbox({ value, bgColor = "var(--bg-color)" }) {
	return (
		<div className={styles.letterbar} style={{ backgroundColor: bgColor }}>
			{value}
		</div>
	);
}
export default Letterbox;
