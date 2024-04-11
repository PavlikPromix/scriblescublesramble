FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY /public ./public

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
