import Gamebar from "@/app/components/Gamebar/Gamebar";
import Keyboard from "@/app/components/Keyboard/Keyboard";

export default function USCustom({ params }) {
	return (
		<div className="maincontainer">
			<Gamebar />
			<Keyboard />
		</div>
	);
}
