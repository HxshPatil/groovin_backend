const oem = require("../mongoDB/models/oem_specs");

const filterCars = async (req, res) => {
  console.log(req.query);
  const filter_cars = req.query;

  try {
    let { colors, mileage, maxPrice, minPrice } = filter_cars;

    // Convert color input to lowercase for case-insensitive comparison
    colors = colors ? colors.toLowerCase() : colors;

    const additionalFilters = {};

    // Check if colorFilter is provided
    if (colors && colors !== "all") {
      additionalFilters.colors = colors;
    }

    // Check if maxPriceFilter is a valid number
    if (maxPrice !== "" && !isNaN(maxPrice) && maxPrice !== "all") {
      additionalFilters.list_price = {
        ...(additionalFilters.list_price || {}),
        $lte: parseFloat(maxPrice),
      };
    }

    // Check if minPriceFilter is a valid number
    if (minPrice !== "" && !isNaN(minPrice) && minPrice !== "all") {
      additionalFilters.list_price = {
        ...(additionalFilters.list_price || {}),
        $gte: parseFloat(minPrice),
      };
    }

    // Check if mileageFilter is a valid number
    if (mileage !== "" && !isNaN(mileage)) {
      additionalFilters.mileage = { $gte: parseFloat(mileage) };
    }

    let query = additionalFilters;

    console.log(query);

    const allCars = await oem.find(query);
    console.log(allCars);
    res.json(allCars);
  } catch (error) {
    console.error("Error filtering cars:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  filterCars,
};
