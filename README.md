# Express Standard API

a Standard Boilerplate for Node Express REST API

## Dependencies

- Language : Typescript/Javascript
- Utility : Nodemon, Docker, Knex
- Database : PostgreSQL, Redis

## Development Installation

```
mv .env.example .env
npm install
bash migrate.sh
npm run dev
```

## Production Installation (Manual)

```
npm run build
npm run prod
```

## Production Installation (With Docker)

```
// Automatically Build Docker Image and trigger docker-compose (Running in Bash Terminal or WSL)
bash server.sh

// Manually Build Docker Image and Compose
docker build -t munirapp/nodejs-app
docker-compose up
```

### List Ports Docker Containers

- 5000 : Express Rest API
- 5400 : PostgreSQL (5432 in Docker)
- 6379 : Redis
- 8080 : Adminer

## Running Unit Test

```
npm run build
npm run test
```

Note: Automatically testing when running apps via Docker
