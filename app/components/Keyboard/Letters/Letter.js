import styles from './Letter.module.scss'
function Letter({children, on_click}) {
	return (
		<div className={styles.letter} onClick={on_click}>
            {children}
        </div>
	);
}
export default Letter;