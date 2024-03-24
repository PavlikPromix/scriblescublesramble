import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import Ownword from '../components/Ownword/Ownword';

export default function Pendosi() {
	return (
		<>
			<div className="maincontainer">
				<Ownword/>
				<Gamebar/>
				<Keyboard/>
			</div>
		</>
	);
}
