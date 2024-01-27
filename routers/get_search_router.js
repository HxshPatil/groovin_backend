const express = require("express");
const router = express.Router();
const { getSearchCallback } = require("../controllers/get_search");

router.route("/search").get(getSearchCallback);

module.exports = router;
