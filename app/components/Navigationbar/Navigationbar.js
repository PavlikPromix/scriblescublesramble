'use client'
import styles from "./Navigationbar.module.scss";
import { useRouter } from 'next/navigation';

function Navigationbar() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<p className={styles.navtext} onClick={() => router.push('/')}>Словобойня</p>
		</div>
	);
}
export default Navigationbar;
