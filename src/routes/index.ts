import { Router } from 'express'
import profileControllers from '../controllers/profileControllers'

// Initiate Router Express
const router = new Router()

// Base Routes
router.get('/', (req, res) => res.send('This is an API Standard for NodeJS'))

// Profile Routes
router.get('/profile/all', profileControllers.getAllProfile)
router.get('/profile/page/:number?', profileControllers.getPaginateProfile)
router.get('/profile/detail/:id?', profileControllers.getProfileID)

export default router
