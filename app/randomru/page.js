import Image from "next/image";
import "../page.css";
import Buttonchik from "../components/Buttonchik/Buttonchik";
import Gamebar from "../components/Bars/Gamebar";
export default function RUSI() {
	return (
		<>
			<div className="maincontainer">
				<Gamebar />
				<Buttonchik redirect={"ru"}>ВЕРНУТЬСЯ НАЗАД</Buttonchik>
			</div>
			<div>
				<Image
					className="img1"
					width={80}
					height={100}
					src="/rusi.svg"
					alt=""
				/>
				<Image
					className="img2"
					width={80}
					height={100}
					src="/rusi.svg"
					alt=""
				/>
			</div>
		</>
	);
}
