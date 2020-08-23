import profile from '../models/profile'
import response from '../helper/response'
import { redisGetAsync, redisSetAsync } from '../../redis'

class ProfileControllers {
	/**
	 *
	 * @param req express request object
	 * @param res express response object
	 *
	 * @swagger
	 * /profile/all:
	 *  get:
	 *    tags:
	 *      - "profiles"
	 *    summary: "Use to get data All Profiles"
	 *    description: ""
	 *    consumes:
	 *      - "application/json"
	 *    produces:
	 *      - "application/json"
	 *    responses:
	 *      '200':
	 *        description: "A successful response"
	 *      '500':
	 *        description: "Internal server error"
	 */
	async getAllProfile(req, res) {
		// Initiate response data and response time
		let dataAllProfile = null
		let time = response.start_time()
		try {
			// Get All Profile in Redis
			dataAllProfile = await redisGetAsync('allProfile')
			// Validate Cache
			if (!dataAllProfile) {
				// Get All Profile from Database
				dataAllProfile = await profile.all()
				// Set data in Redis for 5 minutes
				await redisSetAsync('allProfile', 300, JSON.stringify(dataAllProfile))
				// Return Success response data from database
				return res.json(response.format(time, dataAllProfile, 'success load data from database'))
			}
			// Return Success response data from redis
			return res.json(response.format(time, JSON.parse(dataAllProfile), 'success load data from cache'))
		} catch (error) {
			// Return Error response
			return res.status(500).send(error)
		}
	}

	/**
	 *
	 * @param req express request object
	 * @param res express response object
	 *
	 * @swagger
	 * /profile/page/{pageNumber}:
	 *  get:
	 *    tags:
	 *      - "profiles"
	 *    summary: "Use to get data Profiles per page"
	 *    description: ""
	 *    consumes:
	 *      - "application/json"
	 *    produces:
	 *      - "application/json"
	 *    parameters:
	 *      - name: "pageNumber"
	 *        in: "path"
	 *        description: "Number profile's page"
	 *        type: "integer"
	 *    responses:
	 *      '200':
	 *        description: "a successful response"
	 *      '500':
	 *        description: "Internal server error"
	 */
	async getPaginateProfile(req, res) {
		// Initiate response data and response time
		let dataPaginateProfile = null
		let time = response.start_time()
		try {
			// Initate Limit and Offset
			const { number } = req.params
			const limit = 10
			const offset = number ? limit * number : 0
			// Get Paginate Profile in Redis
			dataPaginateProfile = await redisGetAsync(`paginateProfile${number}`)
			// Validate Cache
			if (!dataPaginateProfile) {
				// Get Paginate Profile from Database
				dataPaginateProfile = await profile.paginate(limit, offset)
				// Set data in Redis for 5 minutes
				await redisSetAsync(`paginateProfile${number}`, 300, JSON.stringify(dataPaginateProfile))
				// Return Success response from database
				return res.json(response.format(time, dataPaginateProfile, 'success load data from database'))
			}
			// Return Success response from redis
			return res.json(response.format(time, JSON.parse(dataPaginateProfile), 'success load data from cache'))
		} catch (error) {
			// Return Error response
			return res.status(500).send(error)
		}
	}

	/**
	 *
	 * @param req express request object
	 * @param res express response object
	 *
	 * @swagger
	 * /profile/detail/{id}:
	 *  get:
	 *    tags:
	 *      - "profiles"
	 *    summary: "Use to get data Profiles by id"
	 *    description: ""
	 *    consumes:
	 *      - "application/json"
	 *    produces:
	 *      - "application/json"
	 *    parameters:
	 *      - name: "id"
	 *        in: "path"
	 *        description: "Profile's ID"
	 *        type: "integer"
	 *    responses:
	 *      '200':
	 *        description: "a successful response"
	 *      '400':
	 *          description : "Bad Request"
	 *      '500':
	 *        description: "Internal server error"
	 */
	async getProfileID(req, res) {
		// Initiate response data and response time
		let dataProfileID = null
		let time = response.start_time()
		try {
			// Initate id
			const { id } = req.params
			// Validate id
			if (!id || id == 0) {
				throw {
					code: 400,
					message: "ID can't be empty or must larger than zero",
				}
			}
			// Get Paginate Profile in Redis
			dataProfileID = await redisGetAsync(`detailProfile${id}`)
			if (!dataProfileID) {
				// Get Detail Profile from Database
				dataProfileID = await profile.findByID(id)
				// Set data in Redis for 5 minutes
				await redisSetAsync(`detailProfile${id}`, 300, JSON.stringify(dataProfileID))
				// Return Success response from database
				return res.json(response.format(time, dataProfileID, 'success load data from database'))
			}
			// Return Success response from cache
			return res.json(response.format(time, JSON.parse(dataProfileID), 'success load data from cache'))
		} catch (error) {
			// Validate and Return Error response
			if (typeof error == 'object') {
				return res.status(error.code).send(error.message)
			}
			return res.status(500).send(error)
		}
	}
}

export default new ProfileControllers()
