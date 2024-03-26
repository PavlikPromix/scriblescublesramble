import styles from "./NotFound.module.scss";

export default function NotFound() {
	return (
		<div className={styles.container}>
			<p className={styles.text}>
				Эта игра не существует!
				<br />
				Проверьте правильность ссылки
			</p>
		</div>
	);
}
