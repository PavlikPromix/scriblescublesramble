import Gamebar from "../../components/Gamebar/Gamebar";
import Keyboard from "../../components/Keyboard/Keyboard";
import { GameProvider } from "../../GameProvider";
import NotFound from "../../components/NotFound/NotFound";
import { GetWord } from "../../api/utils";

export default function USCustom({ params }) {
	const id = params.game;
	const { word, error } = GetWord(id);
	return (
		error ? <NotFound /> :
		<div className="maincontainer">
			<GameProvider>
				<Gamebar word={word} />
				<Keyboard />
			</GameProvider>
		</div>
	);
}
