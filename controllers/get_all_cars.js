const oem = require("../mongoDB/models/oem_specs");

const getAllCars = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 20;

    const skip = (page - 1) * perPage;

    const cardsData = await oem
      .find()
      .sort({ manufacturer_model: 1 })
      .skip(skip)
      .limit(perPage);

    const totalCount = await oem.countDocuments(); // Get total count of cars

    res.status(200).json({ cardsData, totalCount });
  } catch (error) {
    console.error("Error fetching cars:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { getAllCars };
