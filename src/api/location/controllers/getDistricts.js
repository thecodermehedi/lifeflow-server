const District = require("../../../models/District");

// Get all districts
const getDistricts = async (req, res) => {
  try {
    const districts = await District.find().select("name");
    const districtNames = districts?.map((district) => district?.name);
    districtNames.sort();
    res.send(districtNames);
  } catch (error) {
    console.error(error);
    res.status(503).send({message: "Districts Unavailable"});
  }
};

module.exports = getDistricts;
