import Mainbar from "./components/Bars/Mainbar";
import Subbar from "./components/Bars/Subbar";
import Buttonchik from "./components/Buttonchik/Buttonchik";
import Image from "next/image";
import "./page.css"
export default function Home() {
	return (
		<>
			<div className="maincontainer">
				<Mainbar />
				<Subbar />
				<Buttonchik>ИГРАТЬ</Buttonchik>
			</div>
			<div>
				<Image className="img1" width={80} height={100} src="/rusi.svg" alt="" />
				<Image className="img2" width={80} height={100} src="/rusi.svg" alt="" />
			</div>
		</>
	);
}
