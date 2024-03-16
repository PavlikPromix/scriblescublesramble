import { redirect } from "next/dist/server/api-utils";
import Mainbar from "./components/Bars/Mainbar";
import Subbar from "./components/Bars/Subbar";
import Buttonchik from "./components/Buttonchik/Buttonchik";
import Image from "next/image";
import "./page.css"
import { useRouter } from ".router";

export default function Home() {
	return (
		<>
			<div className="maincontainer">
				<Mainbar />
				<Subbar />
				<Buttonchik onClick={redirecttoanotherpage}>ИГРАТЬ</Buttonchik>
			</div>
			<div>
				<Image className="img1" width={80} height={100} src="/rusi.svg" alt="" />
				<Image className="img2" width={80} height={100} src="/rusi.svg" alt="" />
			</div>
		</>
	);
}
