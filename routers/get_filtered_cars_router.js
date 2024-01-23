const express= require("express");
const router = express.Router();
const { filterCars} = require("../controllers/get_filtered_cars");

router.route("/filter") .get( filterCars );

module.exports =router;