import { db } from "../../../firebaseConfig.js";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

export async function POST(request, context) {
	const body = await request.json();
	const word = body.word;

	const q = query(collection(db, "usersession"), where("word", "==", word));
	const querySnapshot = await getDocs(q);
    
	for (const doc of querySnapshot.docs) {
        return new Response(JSON.stringify({ id: doc.id }));
    }

    const doc = await addDoc(collection(db, "usersession"), {
        word: word,
    });

    return new Response(JSON.stringify({ id: doc.id }));
}
