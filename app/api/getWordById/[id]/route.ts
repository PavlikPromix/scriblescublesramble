import { db } from "../../../../firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
import { crypto, encryptString } from "../../../elcrypto.js";

export async function GET(request, context) {
	const id = context.params.id;

	const docRef = doc(db, "usersession", id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const secretKey = crypto.randomBytes(32);
		const iv = crypto.randomBytes(16);

		const encryptedString = encryptString(
			docSnap.data().word,
			secretKey,
			iv
		);

		return new Response(
			JSON.stringify({
				word: encryptedString,
				key: secretKey.toString("hex"),
				iv: iv.toString("hex"),
			}),
			{
				status: 200,
				statusText: "OK",
			}
		);

	} else {
		return new Response("", {
			status: 404,
			statusText: "Not Found",
		});
	}
}
