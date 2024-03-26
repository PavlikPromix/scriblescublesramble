import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
	title: "Словобойня",
	description: "Wrote by Nikitosik and Pavlik",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<head>
				<title>{metadata.title}</title>
			</head>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
