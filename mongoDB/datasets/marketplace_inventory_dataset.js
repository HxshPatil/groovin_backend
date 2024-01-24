const mongoose = require('mongoose');
const Marketplace_Inventory = require('../models/marketplace_inventory');
const oem_specs=require("../models/oem_specs"); 

mongoose.connect('mongodb+srv://harsh0patil001:L1LXkCZoX9SYSVAm@harsh.8sbkl6k.mongodb.net/BUYC');

async function generateRandomEntries(){
  const entries = [];
  const colors = ['red', 'blue', 'white', 'silver', 'black', 'gray', 'yellow'];
  function getRandomColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const sampleData=await oem_specs.find({}).exec();
  for (let car of sampleData) {
      
      const entry ={
      oem_specs_id: car._id,
      price: Math.floor(Math.random() * (5000 + 1)) + 15000,
      kms_on_odometer: Math.floor(Math.random() * 50000) + 10000,
      major_scratches: Math.random() < 0.2,
      original_paint: Math.random() < 0.8,
      color:getRandomColor(),
      accidents_reported: Math.floor(Math.random() * 3),
      previous_buyers: Math.floor(Math.random() * 2) + 1,
      registration_place: ['Karnataka', 'Maharashtra', 'Goa'][Math.floor(Math.random() * 3)],
    };

    entries.push(entry);
  }
  Marketplace_Inventory.insertMany(entries)
  .then(() => {
    console.log('marketplace entries successfully inserted into the database.');
  })
  .catch((error) => {
    console.error('Error inserting random entries:', error);
  })
  .finally(() => {
    console.log("entries successful")
  });

};
generateRandomEntries();