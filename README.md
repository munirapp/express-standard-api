# Express Standard API

a Boilerplate for Node Express REST API

### Dependencies

- Language : Typescript/Javascript
- Utility : Nodemon, Docker, Knex
- Database : PostgreSQL, Redis

### Development Installation

```
mv .env.example .env
npm install
bash migrate.sh
npm run dev
```

### Production Installation (Manual)

```
npm run build
npm run prod
```

### Production Installation (With Docker)

```
# Automatically Build Docker Image and trigger docker-compose
bash server.sh
```

List Ports Docker Containers

- 5000 : Express Rest API
- 5400 : PostgreSQL (5432 in Docker)
- 6379 : Redis
- 8080 : Adminer
