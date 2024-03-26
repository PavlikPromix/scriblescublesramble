import { GameProvider } from "../GameProvider";
import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import CustomCursor from "../components/Сursour/Slavcursour/Slavcursour";

export default function RuRandom() {
	return (
		<div className="maincontainer">
			<CustomCursor />
			<GameProvider>
				<Gamebar lang={"ru"} />
				<Keyboard lang={"ru"} />
			</GameProvider>
		</div>
	);
}
