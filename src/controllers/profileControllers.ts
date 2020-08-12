class ProfileControllers {
  async getAllProfile(req, res) {
    res.send("testing");
  }

  async getPaginateProfile(req, res) {
    console.log(req.params.number);
    res.send(req.params.number);
  }

  async getProfileID(req, res) {
    console.log(req.params.id);
    res.send(req.params.id);
  }
}

export default new ProfileControllers();
