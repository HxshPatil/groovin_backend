const mongoose = require("mongoose");

const caps = new mongoose.Schema({
  cap: {
    type: String,
    required: true,
  },
  list_price: {
    type: Number,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
  image_url: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model("Caps", caps);
