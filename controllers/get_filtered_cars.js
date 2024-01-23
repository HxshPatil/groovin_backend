const oem = require('../mongoDB/models/oem_specs');

const filterCars = async (req, res) => {
    console.log(req.query);
    const filter_cars = req.query;
  
    try {
      const colorFilter = filter_cars.colors;
      const mileageFilter = filter_cars.mileage;
      const priceFilter = filter_cars.list_price;
  
      const additionalFilters = {};
  
      // Check if colorFilter is provided
      if (colorFilter && colorFilter !== 'All') {
        additionalFilters.colors = { $eq: colorFilter };
      }
  
      // Check if priceFilter is a valid number
      if (!isNaN(priceFilter) && priceFilter !== 'All') {
        additionalFilters.listPrice = { $lte: parseFloat(priceFilter) };
      }
  
      // Check if mileageFilter is a valid number
      if (!isNaN(mileageFilter) && mileageFilter !== 'All') {
        additionalFilters.mileage = { $gte: parseFloat(mileageFilter) };
      }
  
      let query=additionalFilters;
  
      // console.log(query);
  
      const allCars = await oem.find(query);
      res.json(allCars);
    }catch (error) {
      console.error('Error filtering cars:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
module.exports = {
    filterCars
};
