const express= require("express");
const router = express.Router();
const {get_oem_count } = require("../controllers/get_count");

router.route("/oemModelsCount") .get( get_oem_count );

module.exports =router;