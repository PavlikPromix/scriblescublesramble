import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import Ownword from "../components/Ownword/Ownword";
import { GameProvider } from "../GameProvider";
import CustomCursor from '../components/Сursour/Slavcursour/Slavcursour'

export default async function RuPreCustom() {
	return (
		<>
			<div className="maincontainer">
				<GameProvider lang="ru">
					<CustomCursor />
					<Ownword />
					<Gamebar isActive={false} />
					<Keyboard />
				</GameProvider>
			</div>
		</>
	);
}
