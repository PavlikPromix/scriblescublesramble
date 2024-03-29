import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
const fs = require("fs").promises;

export async function GetWord(id) {
	const docRef = doc(db, "usersession", id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return { word: docSnap.data().word, error: false };
	} else {
		return { word: "", error: true };
	}
}

export async function GetRandomWord(length) {
	const data = await fs.readFile("app/dictionary.json", "utf8");
	const wordsArray = JSON.parse(data);

	const filteredWords = wordsArray.filter((word) => word.length === length);

	if (filteredWords.length === 0) {
		return null;
	}

	const randomIndex = Math.floor(Math.random() * filteredWords.length);
	return filteredWords[randomIndex];
}
