import Image from "next/image";
import "./page.css"
export default function Home() {
import "../page.css"

export default function GamePage() {
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
