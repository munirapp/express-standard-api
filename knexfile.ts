import * as dotenv from "dotenv";

dotenv.config();

const options = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  pool: { min: 2, max: 10 },
  migrations: {
    tablename: "migrations",
    directory: __dirname + "/database/migrations",
  },
  seeds: {
    directory: __dirname + "/database/seeds",
  },
};

export = options;
