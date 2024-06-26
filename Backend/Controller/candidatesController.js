const Candidate = require("../Models/candidateSchema");

module.exports.postCandidate = async (req, res, next) => {
  const { name, partyname, dob, description } = req.body;
  let candidate = new Candidate({
    name,
    partyname,
    dob,
    description,
  });
  try {
    candidate = await candidate.save();
    res
      .status(200)
      .json({ success: true, message: "Candidate successfully added" });
  } catch (err) {
    next(err);
  }
};

module.exports.getCandidate = async (req, res, next) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json({ success: true, candidates });
  } catch (err) {
    next(err);
  }
};
