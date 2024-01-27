const oem = require("../mongoDB/models/oem_specs");

const getSearchCallback = async (req, res) => {
  const { query } = req.query;

  try {
    let pipeline = [
      {
        $search: {
          index: "manufacturer_model",
          text: {
            path: "manufacturer_model",
            query: query,
            fuzzy: {},
          },
        },
      },
    ];
    const similarCars = await oem.aggregate(pipeline);
    console.log(similarCars);

    res.json(similarCars);
  } catch (error) {
    console.error("Error fetching similar cars:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getSearchCallback };
