import profile from "../models/profile";
import response from "../helper/response";
import redisClient from "../../redis";
import { promisify } from "util";

// Wrapper redis get and set in Promise
const redisGetAsync = promisify(redisClient.get).bind(redisClient);
const redisSetAsync = promisify(redisClient.setex).bind(redisClient);

class ProfileControllers {
  async getAllProfile(req, res) {
    let dataAllProfile = null;
    let time = response.start_time();

    try {
      // Get All Profile in Redis
      dataAllProfile = await redisGetAsync("allProfile");
      // Validate Cache
      if (!dataAllProfile) {
        // Get All Profile from Database
        dataAllProfile = await profile.all();
        // Set data in Redis for 5 minutes
        await redisSetAsync("allProfile", 300, JSON.stringify(dataAllProfile));
        // Return Success response data from database
        return res.json(
          response.format(
            time,
            dataAllProfile,
            "success load data from database"
          )
        );
      }
      // Return Success response data from redis
      return res.json(
        response.format(
          time,
          JSON.parse(dataAllProfile),
          "success load data from cache"
        )
      );
    } catch (error) {
      // Return Error response
      return res.status(500).send(error);
    }
  }

  async getPaginateProfile(req, res) {
    try {
      // Initate Limit and Offset
      const { number } = req.params;
      const limit = 10;
      const offset = number ? limit * number : 0;
      // Get Paginate Profile from Database
      const dbPaginateProfile = await profile.paginate(limit, offset);
      // Return Success response
      return res.json(
        response.format(
          response.start_time(),
          dbPaginateProfile,
          "success load data from database"
        )
      );
    } catch (error) {
      // Return Error response
      return res.status(500).send(error);
    }
  }

  async getProfileID(req, res) {
    try {
      // Initate id
      const { id } = req.params;
      // Validate id
      if (!id || id == 0) {
        throw {
          code: 400,
          message: "ID can't be empty or must larger than zero",
        };
      }
      // Get Detail Profile from Database
      const dbProfileID = await profile.findByID(id);
      // Validate result databse
      if (dbProfileID.rows == 0) {
        throw { code: 404, message: "Not found user" };
      }
      // Return Success response
      return res.json(
        response.format(
          response.start_time(),
          dbProfileID,
          "success load data from database"
        )
      );
    } catch (error) {
      // Validate and Return Error response
      if (typeof error == "object") {
        return res.status(error.code).send(error.message);
      }
      return res.status(500).send(error);
    }
  }
}

export default new ProfileControllers();
