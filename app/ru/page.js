import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import Ownword from "../components/Ownword/Ownword";
import { GameProvider } from "../GameProvider";

export default async function RuPreCustom() {
	return (
		<>
			<div className="maincontainer">
				<GameProvider lang="ru">
					<Ownword />
					<Gamebar isActive={false} />
					<Keyboard />
				</GameProvider>
			</div>
		</>
	);
}
