import { ProfileControllers } from './profileControllers'

export class Controller {
  private profile() {
    return new ProfileControllers()
  }
}
