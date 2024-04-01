import Buttonchik from "./components/Buttonchik/Buttonchik";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<>
			<div className={styles.maincontainer}>
				<div className={styles.mbarcontainer}>
					<p className="boldtext shadow">Добро пожаловать русы!</p>
				</div>
				<div className={styles.sbarcontainer}>
					<p className="boldtext">
						Тут вы будете показывать ваши знания словаря Обжигалова!
					</p>
				</div>
				<Buttonchik redirect={"game"}>ИГРАТЬ</Buttonchik>
			</div>
			<div>
				 <Image
					className={styles.img1}
					width={80}
					height={100}
					src="/rusi.svg"
					alt=""
				/>
				<Image
					className={styles.img2}
					width={80}
					height={100}
					src="/rusi.svg"
					alt=""
				/> 
			</div>
		</>
	);
}
