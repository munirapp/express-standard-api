import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import swaggerOptions from '../swagger.json'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Route } from './routes/root.route'

export class App extends Route {
  private app
  private swagger

  constructor() {
    super()
    this.app = express()
    this.swagger = swaggerJsDoc(swaggerOptions)
  }

  init() {
    // Use Cors
    this.app.use(cors())
    // Use Bodyparser
    this.app.use(bodyParser.json())
    // Initiate Basic Routes
    this.app.use('/', this.route())
    // Initiate Documentaion API Routes
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(this.swaggerDocs))
    // Listen and running server
    this.app.listen(process.env.SERVER_PORT, () => {
      console.log(`Running express on port ${process.env.SERVER_PORT}`)
    })
  }
}
