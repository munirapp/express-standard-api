import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as swaggerOptions from "../swagger.json";
import * as swaggerJsDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";
import routes from "./routes";

// Initiate express
const app = express();
// Use Cors
app.use(cors());
// Use Bodyparser
app.use(bodyParser.json());
// Initiate dotenv config
dotenv.config();
// Initiate Swagger Docs Options
const swaggerDocs = swaggerJsDoc(swaggerOptions);
// Initiate Basic Routes
app.use("/", routes);
// Initiate Documentaion API Routes
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
