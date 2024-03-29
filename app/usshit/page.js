import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import { GameProvider } from "../GameProvider";
import { GetRandomWord } from "../api/utils";

export default async function USRandom() {
	const word = await GetRandomWord(5, "en");
	return (
		<div className="maincontainer">
			<GameProvider lang="en" word={word.toUpperCase()}>
				<Gamebar />
				<Keyboard />
			</GameProvider>
		</div>
	);
}
