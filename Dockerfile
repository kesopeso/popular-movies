FROM node:25.2.1-alpine3.22

EXPOSE 3000

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
