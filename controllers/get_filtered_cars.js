const oem = require('../mongoDB/models/oem_specs');

const filterCars = async (req, res) => {
  console.log(req.query);
  const filter_cars = req.query;

  try {
    const colorFilter = filter_cars.colors;
    const mileageFilter = filter_cars.mileage;
    const maxPriceFilter = filter_cars.maxPrice;
    const minPriceFilter = filter_cars.minPrice;

    const additionalFilters = {};

    // Check if colorFilter is provided
    if (colorFilter && colorFilter !== 'All') {
      additionalFilters.colors = colorFilter;
    }

    // Check if maxPriceFilter is a valid number
    if (maxPriceFilter !== '' && !isNaN(maxPriceFilter) && maxPriceFilter !== 'All') {
      additionalFilters.list_price = {
        ...(additionalFilters.list_price || {}),
        $lte: parseFloat(maxPriceFilter),
      };
    }

    // Check if minPriceFilter is a valid number
    if (minPriceFilter !== '' && !isNaN(minPriceFilter) && minPriceFilter !== 'All') {
      additionalFilters.list_price = {
        ...(additionalFilters.list_price || {}),
        $gte: parseFloat(minPriceFilter),
      };
    }

    // Check if mileageFilter is a valid number
    if (mileageFilter !== '' && !isNaN(mileageFilter)) {
      additionalFilters.mileage = { $gte: parseFloat(mileageFilter) };
    }

    let query = additionalFilters;

    console.log(query);

    const allCars = await oem.find(query);
    console.log(allCars);
    res.json(allCars);
  } catch (error) {
    console.error('Error filtering cars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  filterCars
};
