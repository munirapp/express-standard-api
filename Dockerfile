FROM node:13
LABEL author="Munir AP (softwaremakssar@gmail.com)"
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN mv .env.docker .env
RUN npm run build
CMD [ "npm", "run", "prod" ]

