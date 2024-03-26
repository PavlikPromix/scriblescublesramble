import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import { GameProvider } from "../GameProvider";

export default function USRandom() {
	return (
		<div className="maincontainer">
			<GameProvider>
				<Gamebar />
				<Keyboard />
			</GameProvider>
		</div>
	);
}
