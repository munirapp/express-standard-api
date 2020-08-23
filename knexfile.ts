import 'dotenv/config'
import path from 'path'

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
    directory: path.resolve(process.cwd(), 'database/migrations'),
  },
  seeds: {
    directory: path.resolve(process.cwd(), 'database/seeds'),
  },
};

export default options;
