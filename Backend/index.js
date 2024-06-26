const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth.js");
const candidateRoute = require("./Routes/candidates.js");
const votersRoute = require("./Routes/voters.js");


dotenv.config();
const app = express();
const port = 5000;
console.log(port);
const corsOptions = {
  origin: true,
};
app.get("/", (req, res) => {
  res.send("Api is working");
});
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

app.use(express.json());
// app.use(cookieParser())
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/candidate", candidateRoute);
app.use("/api/v1/voter", votersRoute);


app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port = ${port}`);
});
