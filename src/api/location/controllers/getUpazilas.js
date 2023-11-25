const Upazila = require("../../../models/Upazila");

// Get all upazilas
const getUpazilas = async (req, res) => {
  try {
    const upazilas = await Upazila.find().select("name");
    const upazilaNames = upazilas.map((upazila) => upazila.name);
    const uniqueUpazilaNames = [...new Set(upazilaNames)];
    uniqueUpazilaNames.sort();
    res.send(uniqueUpazilaNames);
  } catch (error) {
    console.error(error);
    res.status(503).send({message: "Upazilas Unavailable"});
  }
};

module.exports = getUpazilas;
