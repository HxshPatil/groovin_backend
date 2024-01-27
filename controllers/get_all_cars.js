const oem = require("../mongoDB/models/oem_specs");

const getAllCars = async (req, res) => {
  try {
    // Fetch all cars from the database
    const oem_details = await oem.find().sort({'manufacturer_model': 1});
    res.status(200).json({ cars: oem_details });
  } catch (error) {
    console.error("Error fetching all cars:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllCars };
