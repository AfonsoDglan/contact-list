FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY next.config.mjs ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]
