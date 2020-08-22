<p align="center">
    <img src="https://raw.githubusercontent.com/munirapp/express-standard-api/master/logo.png">
</p>

<h2 align="center">Express Standard API</h2>
<p align="center">A Standard Boilerplate for Node Express REST API</p>

<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/github/license/munirapp/express-standard-api?style=for-the-badge"/>
    </a>
    <a href="https://github.com/munirapp/express-standard-api/stargazers">
        <img src="https://img.shields.io/github/stars/munirapp/express-standard-api?style=for-the-badge"/>
    </a>
    <a href="https://github.com/munirapp/express-standard-api/commits/master">
        <img src="https://img.shields.io/github/last-commit/munirapp/express-standard-api?style=for-the-badge"/>
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/typescript">
        <img src="https://img.shields.io/github/package-json/dependency-version/munirapp/express-standard-api/typescript"/>
    </a>
    <a href="https://www.npmjs.com/package/nodemon">
        <img src="https://img.shields.io/github/package-json/dependency-version/munirapp/express-standard-api/nodemon?color=green"/>
    </a>
    <a href="https://www.npmjs.com/package/redis">
        <img src="https://img.shields.io/github/package-json/dependency-version/munirapp/express-standard-api/redis?color=red"/>
    </a>
</p>

## :gear: Dependencies

- Language :
  - [Typescript](https://www.typescriptlang.org/)
  - [Javascript](https://developer.mozilla.org/id/docs/Web/JavaScript)
- Pacakges :
  - [Nodemon](https://www.npmjs.com/package/nodemon)
  - [Knex](https://www.npmjs.com/package/knex)
  - [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)
  - [Swagger JS Docs](https://www.npmjs.com/package/swagger-jsdoc)
  - [Day.JS](https://www.npmjs.com/package/dayjs)
  - [Jest](https://www.npmjs.com/package/jest)
- Database :
  - [PostgreSQL](https://www.postgresql.org/)
  - [Redis](https://redis.io/)
- Utility :
  - [Docker](https://www.docker.com/)
  - [Adminer](https://www.adminer.org/)

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

**Note**: If you run manual installation, make sure postgre and redis server is running or that will be error

### :whale: With Docker

```
// Build and running docker container
docker-compose build
docker-compose up

// Stop all running container
docker-compose down
```

### :whale: List Ports Docker Containers

- 5000:5000 Express Rest API
- 5400:5432 PostgreSQL
- 6379:6379 Redis
- 8080:8080 Adminer

### :camera: Screenshot

![Docker Running Container](https://i.ibb.co/W5jNCcx/image.png)
![Adminer Dashboard](https://i.ibb.co/0JdHD9D/image.png)

## :test_tube: Running Unit Test

### Manual

```
npm run test
```

**Note**: If you run manual test, make sure postgre and redis server is running or that will be failed

### :whale: With Docker

```
docker exec express-api npm run test
```

**Note**: Make sure you have run docker production installation before run it

### :camera: Screenshot

![Unit Test Result](https://i.ibb.co/Nt2rXmJ/image.png)

## :file_cabinet: Database Migrations

### Manual

```
// Run it in Bash terminal
bash migrate.sh
```

**Note**: If you run manual migration, make sure postgre server is running or that will be error

### :whale: With Docker

```
docker exec express-api bash migrate.sh
```

**Note**: Make sure you have run docker production installation before run it

### :camera: Screenshot

![Migration Result](https://i.ibb.co/Hdv434Q/image.png)

## :file_folder: Structure Folder

```
.
├── __test__ // Jest test file
├── database // Knex Module
├── dist // Automatically generate when you run production Installation
├── src
│   ├── controllers
│   │   └── **.ts
│   ├── helper
│   │   └── **.ts
│   ├── models
│   │   └── **.ts
│   ├── routes
│   │   └── **.ts
│   ├── app.ts // Main
│   └── index.ts // Running Sever
├── .env
├── docker-compose.yml
├── Dockerfile
├── jest.config.js // Jest Configuration
├── knexfile.ts // Knex Configuration
├── migrate.sh // Shell migrate Database
├── redis.ts // Redis Configuration
├── swagger.json // Swagger Definition
└── ...
```

## :writing_hand: Documentations API

After you running development/production Installation you can see documentation at : [http://localhost:5000/docs](http://localhost:5000/docs)

### :camera: Screenshot

![Swagger Docs](https://i.ibb.co/h1fxjVJ/image.png)
