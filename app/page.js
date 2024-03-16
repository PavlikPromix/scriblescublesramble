import Mainbar from "./components/Bars/Mainbar";
import Subbar from "./components/Bars/Subbar";
import "./page.css"

export default function Home() {
	return (
		<>
			<div className="maincontainer">
				<Mainbar />
				<Subbar />
			</div>
			<div>
				<img className="img1" src=""></img>
				<img className="img2" src=""></img>
			</div>

		</>
	);
}
