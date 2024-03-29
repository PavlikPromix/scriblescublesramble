import { GameProvider } from "../GameProvider";
import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import CustomCursor from "../components/Сursour/Slavcursour/Slavcursour";
import { GetRandomWord } from "../api/utils";

export default async function RuRandom() {
	const word = await GetRandomWord(5);
	return (
		<div className="maincontainer">
			<CustomCursor />
			<GameProvider word={word.toUpperCase()}>
				<Gamebar lang={"ru"} />
				<Keyboard lang={"ru"} />
			</GameProvider>
		</div>
	);
}
