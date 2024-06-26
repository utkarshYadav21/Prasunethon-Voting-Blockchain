const express = require("express");
const router = express.Router();
const candidateController = require("../Controller/candidatesController");

router.get("/get", candidateController.getCandidate);
router.post("/add", candidateController.postCandidate);

module.exports = router;
