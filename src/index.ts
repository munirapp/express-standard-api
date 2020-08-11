import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running express on port ${process.env.SERVER_PORT}`);
});
