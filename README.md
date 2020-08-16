<p align="center">
    <img src="https://raw.githubusercontent.com/munirapp/express-standard-api/master/logo.png">
</p>

<h2 align="center">Express Standard API</h2>
<p align="center">A Standard Boilerplate for Node Express REST API</p>

[![License: MIT](https://img.shields.io/github/license/munirapp/express-standard-api?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Star](https://img.shields.io/github/stars/munirapp/express-standard-api?style=for-the-badge)](https://github.com/munirapp/express-standard-api/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/munirapp/express-standard-api?style=for-the-badge)](https://github.com/munirapp/express-standard-api/commits/master)
&nbsp;

[![Typescript](https://img.shields.io/github/package-json/dependency-version/munirapp/express-standard-api/typescript)](https://www.npmjs.com/package/typescript)
[![Nodemon](https://img.shields.io/github/package-json/dependency-version/munirapp/express-standard-api/nodemon?color=green)](https://www.npmjs.com/package/nodemon)
[![Knex](https://img.shields.io/github/package-json/dependency-version/munirapp/express-standard-api/knex?color=orange)](https://www.npmjs.com/package/knex)
[![Redis](https://img.shields.io/github/package-json/dependency-version/munirapp/express-standard-api/redis?color=red)](https://www.npmjs.com/package/redis)

## :gear: Dependencies

- Language : Typescript/Javascript
- Utility : Nodemon, Docker, Knex
- Database : PostgreSQL, Redis

## :astronaut: Development Installation

```
mv .env.manual .env
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

### :whale: With Docker

```
// Build and running docker container
docker-compose up

// Stop all running container
docker-compose down
```

### :whale: List Ports Docker Containers

- 5000:5000 Express Rest API
- 5400:5432 PostgreSQL
- 6379:6379 Redis
- 8080:8080 Adminer

## :test_tube: Running Unit Test

```
npm run build
npm run test
```
