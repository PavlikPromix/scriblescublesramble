import Buttonchik from "../components/Buttonchik/Buttonchik";
import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import Ownword from '../components/Ownword/Ownword';
import Inputbar from "../components/Inputbar/Inputbar";
export default function RUSI() {
	return (
		<>
			<div className="maincontainer">
				<Ownword/>
				<Gamebar />
				<Keyboard lang={"ru"}/>
			</div>
		</>
	);
}
