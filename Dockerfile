FROM node:13
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN mv .env.example .env
EXPOSE 5000
