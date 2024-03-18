import styles from './Letter.module.scss'
function Letter({children}) {
	return (
		<button className={styles.letter}>
            {children}
        </button>
	);
}
export default Letter;