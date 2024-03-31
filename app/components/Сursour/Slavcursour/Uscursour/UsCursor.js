"use client";
import { useEffect, useState } from "react";

const UsCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updatePosition = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};
        document.body.style.cursor = 'none';

		window.addEventListener("mousemove", updatePosition);

		return () => {
			window.removeEventListener("mousemove", updatePosition);
			document.body.style.cursor = 'auto';
		};
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				left: position.x,
				top: position.y,
				transform: "translate(-50%, -50%)",
				pointerEvents: "none",
				zIndex: 9999,
			}}
		>
			<img
				src="/usflag.png"
			/>
		</div>
	);
};

export default UsCursor;
