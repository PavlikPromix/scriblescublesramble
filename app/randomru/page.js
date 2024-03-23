import Gamebar from "../components/Gamebar/Gamebar";
import Keyboard from "../components/Keyboard/Keyboard";
import Ownword from '../components/Ownword/Ownword';

export default function RUSI() {
	return (
		<>
			<div className="maincontainer">
				<Ownword lang={'ru'}/>
				<Gamebar />
				<Keyboard lang={"ru"}/>
			</div>
		</>
	);
}
