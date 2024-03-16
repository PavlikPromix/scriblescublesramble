import Mainbar from "./components/Bars/Mainbar";
import Subbar from "./components/Bars/Subbar";
import Buttonchik from "./components/Buttonchik/Buttonchik";
import "./page.css"

export default function Home() {
	return (
		<>
			<div className="maincontainer">
				<Mainbar />
				<Subbar />
			</div>
		</>
	);
}
