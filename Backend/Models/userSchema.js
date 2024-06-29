const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["voter", "admin"], default: "voter" },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please fill a valid email address"],
  },
  accid: { type: String, required: true },
  password: { type: String, required: true },
  dob: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        const age = Math.floor(
          (Date.now() - value.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
        );
        return age > 18;
      },
      message: "Age must be greater than 18",
    },
  },
});

const Voter = mongoose.model("Voter", UserSchema);

module.exports=Voter;
