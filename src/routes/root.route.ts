import { IndexRoute } from './index'

export class Route {
  route() {
    return [new IndexRoute().routes()]
  }
}
