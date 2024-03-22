import Buttonchik from "../components/Buttonchik/Buttonchik";
import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import CustomCursor from "../components/Сursour/Slavcursour/Slavcursour";
export default function RUSI() {
	return (
		<>
			<div className="maincontainer">
				<CustomCursor/>
				<Gamebar />
				<Keyboard lang={"ru"}/>
				
			</div>
		</>
	);
}