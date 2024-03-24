import Gamebar from "@/app/components/Gamebar/Gamebar";
import Keyboard from "@/app/components/Keyboard/Keyboard";

export default function RuCustom({ params }) {
	return (
		<div className="maincontainer">
			<Gamebar lang={"ru"} />
			<Keyboard lang={"ru"} />
		</div>
	);
}
