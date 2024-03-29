'use client';
import styles from './Letter.module.scss'
function Letter({children, on_click, bgcolor = "var(--bg-color)"}) {
	return (
		<div className={styles.letter} onClick={on_click} style={{backgroundColor: bgcolor}}>
            {children}
        </div>
	);
}
export default Letter;