import "./game.scss";
import Buttonchik from "../components/Buttonchik/Buttonchik";

export default function GamePage() {
	return (
		<>
			<div className="gamecontainer">
				<div className="rusland subcontainer">
					<div className="trans">
						<Buttonchik redirect={"randomru"}>
							ПРОБРОСИТЬ СВОЁ СЛОВЦО
						</Buttonchik>
						<Buttonchik redirect={"slavshit"}>
							СЛАВЯНСКОЕ ПОБОИЩЕ
						</Buttonchik>
					</div>
				</div>
				<div className="usland subcontainer">
					<div className="trans">
						<Buttonchik redirect={"randomus"}>
							СВОЁ СЛОВО
						</Buttonchik>
						<Buttonchik redirect={"usshit"}>
							БОЙНЯ НА ДИКОМ ЗАПАДЕ
						</Buttonchik>
					</div>
				</div>
			</div>
		</>
	);
}
