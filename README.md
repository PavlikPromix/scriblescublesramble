## How to run
First, run the `npm ci` in the project folder to install all the dependencies.

You need a .env file that contains your api key for the yandex dictionary api:
```env
YANDEXAPI=YOUR_API_KEY_HERE
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
