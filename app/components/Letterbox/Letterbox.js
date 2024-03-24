import styles from './Letterbox.module.scss'
function Letterbox({value}) {
	return (
		<div className={styles.letterbar}>
			{value}
        </div>
	);
}
export default Letterbox;