import { ProfileControllers } from './profileControllers'

export class Controller {
   profile() {
    return new ProfileControllers()
  }
}
