const mongoose = require("mongoose");

const oemSpecsSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  manufacturer_model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  list_price: {
    type: Number,
    required: true,
  },
  colors: {
    type: String,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  power_bhp: {
    type: Number,
    required: true,
  },
  max_speed: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String, // Assuming the image URL is a string
    required: true,
  },
});
module.exports = mongoose.model("OEM_Specs", oemSpecsSchema);
