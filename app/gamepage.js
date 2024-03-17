import Image from "next/image";
import "./page.css"
export default function Home() {
	return (
		<>
			<div className="maincontainer">
			</div>
			<div>
				<Image className="img1" width={80} height={100} src="/rusi.svg" alt="" />
				<Image className="img2" width={80} height={100} src="/rusi.svg" alt="" />
			</div>
		</>
	);
}
