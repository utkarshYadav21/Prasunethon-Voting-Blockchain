const Voter = require("../Models/userSchema");

module.exports.getVoters = async (req, res, next) => {
  try {
    const voters = await Voter.find({role:"voter"});
    res.status(200).json({ success: true, voters });
  } catch (err) {
    next(err);
  }
};
