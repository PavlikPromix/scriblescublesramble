## How to run
First, run the `npm ci` in the project folder to install all the dependencies.

You need an .env file that contains your api key for the yandex dictionary api:
```env
YANDEXAPI=YOUR_API_KEY_HERE
```

Also you need `firebaseConfig.js` in the project's root folder content of which should look like this:
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "ANOTHER_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
