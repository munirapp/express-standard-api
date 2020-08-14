# :spider_web: Express Standard API

[![License: MIT](https://img.shields.io/github/license/munirapp/express-standard-api?style=for-the-badge)](https://opensource.org/licenses/MIT)
[!(https://img.shields.io/github/stars/munirapp/express-standard-api?style=for-the-badge)](https://github.com/munirapp/express-standard-api/stargazers)

a Standard Boilerplate for Node Express REST API

## :gear: Dependencies

- Language : Typescript/Javascript
- Utility : Nodemon, Docker, Knex
- Database : PostgreSQL, Redis

## :astronaut: Development Installation

```
mv .env.example .env
npm install
bash migrate.sh
npm run dev
```

## :rocket: Production Installation

### Manual

```
npm run build
npm run prod
```

### With Docker

```
// Automatically Build Docker Image and trigger docker-compose (Running in Bash Terminal or WSL)
bash server.sh

// Manually Build Docker Image and Compose
docker build -t munirapp/nodejs-app
docker-compose up
```

### List Ports Docker Containers

- 5000:5000 Express Rest API
- 5400:5432 PostgreSQL
- 6379:6379 Redis
- 8080:8080 Adminer

## :test_tube: Running Unit Test

```
npm run build
npm run test
```

**Note**: Automatically testing when running apps via Docker
