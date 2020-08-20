import { Router } from 'express'
import { Request as Req, Response as Res } from 'expres'
import { Controller } from '../controllers/root.controller'

export class IndexRoute extends Controller {
  private router

  constructor() {
    super()
    this.router = new Router()
  }

  routes() {
    return [
      // Base Routes
      this.router.get('/', (req: Req, res: Res) => res.send('This is an API Standard for NodeJS')),
      // Profile Routes
      this.router.get('/profile/all', this.profile().getAllProfile),
      this.router.get('/profile/page/:number?', this.profile().getPaginateProfile),
      this.router.get('/profile/detail/:id?', this.profile().getProfileID)
    ]
  }
}
