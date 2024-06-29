const mongoose = require("mongoose");

const candidateScehma = new mongoose.Schema({
  name: { type: String, required: true },
  partyname: { type: String },
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
  description: { type: String },
  image: { type: String },
  candidateId: { type: Number },
});

const Candidate = mongoose.model("Candidate", candidateScehma);

module.exports = Candidate;
