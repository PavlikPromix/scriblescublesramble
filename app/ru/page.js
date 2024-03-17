import Image from "next/image";
import "../page.css"
import Buttonchik from "../components/Buttonchik/Buttonchik";
export default function RUSI() {
	return (
		<>
			<div className="maincontainer">
			<Buttonchik redirect={'randomru'}>ЗАГАДАТЬ СЛОВО САМОМУ</Buttonchik>
			<Buttonchik redirect={'slavshit'}>СЛАВЯНСКАЯ БОЙНЯ</Buttonchik>
			</div>
			<div>
				<Image className="img1" width={80} height={100} src="/rusi.svg" alt="" />
				<Image className="img2" width={80} height={100} src="/rusi.svg" alt="" />
			</div>
		</>
	);
}