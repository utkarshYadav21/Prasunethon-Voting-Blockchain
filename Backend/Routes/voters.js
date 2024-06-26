const express = require("express");
const router = express.Router();
const votersController = require("../Controller/votersController");

router.get("/get", votersController.getVoters);

module.exports = router;
