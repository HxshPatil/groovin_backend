const express = require("express");
const router = express.Router();
const { getSimilarCarsCallback } = require("../controllers/get_similar");

router.route("/oemSpecsByModelYear").get(getSimilarCarsCallback);

module.exports = router;
