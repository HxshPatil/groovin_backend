const oem_specs = require("../mongoDB/models/oem_specs");

const get_oem_count = async (req, res) => {
  try {
    const count = await oem_specs.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error("cannot fetch count:", error);
    res.status(500).json({ error: "Internal Server Error in OEM.js" });
  }
};

module.exports = { get_oem_count };
