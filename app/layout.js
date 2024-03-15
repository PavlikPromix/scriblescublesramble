import Navigationbar from "./components/Navigationbar/Navigationbar.js";
import './globals.css'

export const metadata = {
	title: "ScribleScubleSramble",
	description: "Wrote by Nikitosik and Pavlik",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
      <head>
        <title>{metadata.title}</title>
      </head>
			<body>
        <Navigationbar />
        {children}
      </body>
		</html>
	);
}
