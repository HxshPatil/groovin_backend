const express = require("express");
const router = express.Router();
const { getAllCaps } = require("../controllers/get_all_caps");

router.route("/allCaps").get(getAllCaps);

module.exports = router;
