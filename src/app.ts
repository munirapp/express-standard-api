import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import slowDown from 'express-slow-down'
import compression from 'compression'
import swaggerOptions from '../swagger.json'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import logger from 'morgan'
import routes from "./routes";

// Initiate express
const app = express()
// Initiate Swagger Docs Options
const swaggerDocs = swaggerJsDoc(swaggerOptions)
// // Use Bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// // Use Helmet
app.use(helmet())
// Use Compression
app.use(compression({ level: 9, strategy: 5 }))
// // Use Cors
app.use(
	cors({
		origin: '*',
		methods: '*',
		allowedHeaders: '*',
		exposedHeaders: '*',
		credentials: true,
	})
)
// User Rate Limit
app.use(
	rateLimit({
		windowMs: 60 * 1000 * 1,
		max: 20,
		message: 'Oops..you sent too many requests, please try again in 1 minutes',
	})
)
// User Slow Down Request
app.use(
	slowDown({
		windowMs: 60 * 1000 * 1,
		delayAfter: 15,
		delayMs: 1500,
	})
)
// Initiate Documentaion API Routes
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
// Use Module for development not for production in here
if (process.env.NODE_ENV === 'development') {
	app.use(logger('dev'))
}
// Initiate Basic Routes
app.use("/", routes);

export default app
