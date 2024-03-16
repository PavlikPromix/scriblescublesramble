import { redirect } from "next/dist/server/api-utils";
import Mainbar from "./components/Bars/Mainbar";
import Subbar from "./components/Bars/Subbar";
import Buttonchik from "./components/Buttonchik/Buttonchik";
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
				<img className="img1" src=""></img>
				<img className="img2" src=""></img>
			</div>

		</>
	);
}
