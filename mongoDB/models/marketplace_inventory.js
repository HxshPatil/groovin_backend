const mongoose = require('mongoose');

const marketplaceInventorySchema = new mongoose.Schema({
    oem_specs_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OEM_Specs',
    },
    price: {
      type: Number,
      required: true,
    },
    kms_on_odometer: {
      type: Number,
      required: true,
    },
    major_scratches: {
      type: Boolean,
      required: true,
    },
    original_paint: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    accidents_reported: {
      type: Number,
      required: true,
    },
    previous_buyers: {
      type: Number,
      required: true,
    },
    registration_place: {
      type: String,
      required: true,
    },
  });

  const Marketplace_Inventory = mongoose.model('Marketplace_Inventory', marketplaceInventorySchema);
  module.exports = Marketplace_Inventory;
