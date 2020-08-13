import * as redis from "redis";
import * as dotenv from "dotenv";

dotenv.config();

const client = redis.createClient({ host: process.env.REDIS_HOST });

export default client;
