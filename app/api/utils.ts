import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function GetWord(id) {	
	const docRef = doc(db, "usersession", id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return { word: docSnap.data().word, error: false };
	} else {
		return { word: "", error: true };
	}
}