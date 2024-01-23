const marketplace= require("../mongoDB/models/marketplace_inventory");

const get_oem_count= async (req, res) => {
    try {
      const count = await marketplace.countDocuments();
      res.json({ count });
    } catch (error) {
      console.error('cannot fetch count:', error);
      res.status(500).json({ error: 'Internal Server Error in OEM.js' });
    }
  };

module.exports={get_oem_count}
