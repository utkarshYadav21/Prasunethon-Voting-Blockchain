const Voter = require("../Models/userSchema");
const Candidate = require("../Models/candidateSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports.authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }
  try {
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired" });
    }
    return res.status(401).json({ success: false, message: `Invalid Token` });
  }
};

module.exports.restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;
  let user;
  const voter = await Voter.findById(userId);
  const candidate = await Candidate.findById(userId);
  if (voter) {
    user = voter;
  }
  if (candidate) {
    user = candidate;
  }
  //console.log(userId)
  if (!roles.includes(req.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorized" });
  }
  next();
};

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};
module.exports.register = async (req, res) => {
  const { email, password, name, role, accid, dob } = req.body;
  try {
    let user = null;
    if (role === "voter" || "admin") {
      user = await Voter.findOne({ email });
    }
    // else if(role==='candidate'){
    //     user =await Candidate.findOne({email})
    // }
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    // const salt = await bcrypt.genSalt(10)
    // const hashPassword = await bcrypt.hash(password, salt)
    if (role === "voter" || "admin") {
      user = new Voter({
        name,
        email,
        password,
        role,
        accid,
        dob,
      });
    }
    // if(role==='Candidate'){
    // user = new Candidate({
    //     name,
    //     partyname,
    //     dob,
    //     description
    // })
    // }
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `${e} Internal server error, try again`,
    });
  }
};
module.exports.login = async (req, res) => {
  const { email,password } = req.body;
  try {
    let user = null;
    const voter = await Voter.findOne({ email });

    if (voter) {
      user = voter;
    }
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password
    );
    console.log(isPasswordMatch)
    if (isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }
    const token = generateToken(user);
    return res
      .status(200)
      .json({ status: true, message: "Successful Login", token, user });
  } catch {
    res.status(500).json({ status: false, message: "Failed to Login" });
  }
};
