const express = require("express");
const router = express.Router();
const { getAllCars } = require("../controllers/get_all_cars");

router.route("/all").get(getAllCars);

module.exports = router;
