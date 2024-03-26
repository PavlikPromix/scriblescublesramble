import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import Ownword from "../components/Ownword/Ownword";
import { GameProvider } from "../GameProvider";

export default function USPreCustom() {
	return (
		<>
			<div className="maincontainer">
				<Ownword />
				<GameProvider>
					<Gamebar isActive={false} />
					<Keyboard />
				</GameProvider>
			</div>
		</>
	);
}
