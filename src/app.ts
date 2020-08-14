import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import routes from "./routes";

// Initiate express
const app = express();

// Use Cors
app.use(cors());

// Use Bodyparser
app.use(bodyParser.json());

// Initiate dotenv
dotenv.config();

// Initiate Routes
app.use("/", routes);

export default app;
