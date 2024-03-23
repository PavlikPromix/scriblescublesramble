"use client";
import Gamebar from "@/app/components/Gamebar/Gamebar";
import Keyboard from "@/app/components/Keyboard/Keyboard";

export default function RuGame({ params }) {
	console.log(params.game);
	return (
		<>
			<div className="maincontainer">
				<Gamebar />
				<Keyboard lang={"ru"} />
			</div>
		</>
	);
}
