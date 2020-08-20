import { IndexRoute } from './index'

export class Route {
  private route() {
    return [new IndexRoute().routes()]
  }
}
