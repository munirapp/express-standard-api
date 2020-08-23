import 'dotenv/config'
import redis from "redis";
import { promisify } from "util";

// Create redis client connection
const client = redis.createClient({ host: process.env.REDIS_HOST });
// Wrapper redis get and set in Promise
const GetAsync = promisify(client.get).bind(client);
const SetAsync = promisify(client.setex).bind(client);
const DelAsync = promisify(client.del).bind(client);
const FlushAsync = promisify(client.flushall).bind(client);

export const redisGetAsync = GetAsync;
export const redisSetAsync = SetAsync;
export const redisDelAsync = DelAsync;
export const redisFlushAsync = FlushAsync;
