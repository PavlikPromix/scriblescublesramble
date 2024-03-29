import Gamebar from "../../components/Gamebar/Gamebar";
import Keyboard from "../../components/Keyboard/Keyboard";
import { GameProvider } from "../../GameProvider";
import NotFound from "../../components/NotFound/NotFound";
import { GetWord } from "../../api/utils";

export default async function RuCustom({ params }) {
	const id = params.game;
	const { word , error } = await GetWord(id);
	return error ? (
		<NotFound />
	) : (
		<div className="maincontainer">
			<GameProvider>
				<Gamebar lang={"ru"} word={word} />
				<Keyboard lang={"ru"} />
			</GameProvider>
		</div>
	);
}
