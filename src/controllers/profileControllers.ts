import profile from "../models/profile";
import response from "../helper/response";

class ProfileControllers {
  async getAllProfile(req, res) {
    try {
      // Get All Profile from Database
      const dbAllProfile = await profile.all();
      // Return Success response
      return res.json(
        response.format(
          response.start_time(),
          dbAllProfile,
          "success load data"
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
      // Get All Profile from Database
      const dbPaginateProfile = await profile.paginate(limit, offset);
      // Return Success response
      return res.json(
        response.format(
          response.start_time(),
          dbPaginateProfile,
          "success load data"
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
      // Get All Profile from Database
      const dbProfileID = await profile.findByID(id);
      // Validate result databse
      if (dbProfileID.rows == 0) {
        throw { code: 404, message: "Not found user" };
      }
      // Return Success response
      return res.json(
        response.format(response.start_time(), dbProfileID, "success load data")
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
