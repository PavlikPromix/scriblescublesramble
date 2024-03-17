'use client'
import "./Navigationbar.css";
import { useRouter } from 'next/navigation';

function Navigationbar() {
	const router = useRouter();
	return (
		<div className="container">
			<p className="navtext boldtext" onClick={() => router.push('/')}>Словобойня</p>
		</div>
	);
}
export default Navigationbar;
