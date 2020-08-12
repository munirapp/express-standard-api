import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

// Initiate express
const app = express();

// Use Cors
app.use(cors());

// Use Bodyparser
app.use(bodyParser.json());

// Initiate dotenv
dotenv.config();

// Initiate Route
app.use("/", (req, res) => {
  res.send("Hello world");
});

// Listen and running server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running express on port ${process.env.SERVER_PORT}`);
});
