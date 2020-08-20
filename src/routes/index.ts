import { Router } from 'express'
import { Request as Req, Response as Res } from 'expres'
import profileControllers from '../controllers/profileControllers'

export class IndexRoute {
  private router

  constructor() {
    this.router = new Router()
  }

  routes() {
    return [
      // Base Routes
      this.router.get('/', (req: Req, res: Res) => res.send('This is an API Standard for NodeJS')),
      // Profile Routes
      this.router.get('/profile/all', profileControllers.getAllProfile),
      this.router.get('/profile/page/:number?', profileControllers.getPaginateProfile),
      this.router.get('/profile/detail/:id?', profileControllers.getProfileID)
    ]
  }
}
