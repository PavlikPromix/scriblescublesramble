'use client'
import styles from "./Navbar.module.scss";
import { useRouter } from 'next/navigation';

function Navbar() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<p className={styles.navtext} onClick={() => router.push('/')}>Словобойня</p>
		</div>
	);
}
export default Navbar;
