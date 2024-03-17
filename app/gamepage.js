import Image from "next/image";
import gamemodebarru from "./components/Bars/gamemodebarru";
import gamemodebarus from "./components/Bars/gamemodebarus";
import "./page.css"
export default function Home() {
	return (
		<>
			<div className="maincontainer">
				<Gamemodebarru/>
				<gamemodebarus/>
			</div>
			<div>
				<Image className="img1" width={80} height={100} src="/rusi.svg" alt="" />
				<Image className="img2" width={80} height={100} src="/rusi.svg" alt="" />
			</div>
		</>
	);
}
