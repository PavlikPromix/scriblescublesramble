import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import CustomCursor from "../components/Сursour/Slavcursour/Slavcursour";

export default function RuRandom() {
	return (
		<div className="maincontainer">
			<CustomCursor />
			<Gamebar lang={"ru"} />
			<Keyboard lang={"ru"} />
		</div>
	);
}
