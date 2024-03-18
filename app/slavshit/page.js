import Buttonchik from "../components/Buttonchik/Buttonchik";
import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import SlavCursor from "../components/Сursour/Slavcursour/Slavcursour";
export default function RUSI() {
	return (
		<>
			<div className="maincontainer">
				<SlavCursor/>
				<Gamebar />
				<Keyboard lang={"ru"}/>
			</div>
		</>
	);
}