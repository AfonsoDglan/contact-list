FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY next.config.mjs ./

RUN npm install

COPY . .


CMD ["npm", "run", "dev"]
