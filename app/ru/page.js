import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import Ownword from "../components/Ownword/Ownword";
import { GameProvider } from "../GameProvider";

export default async function RuPreCustom() {
	return (
		<>
			<div className="maincontainer">
				<Ownword lang={"ru"} />
				<GameProvider>
					<Gamebar lang={"ru"} isActive={false} />
					<Keyboard lang={"ru"} />
				</GameProvider>
			</div>
		</>
	);
}
