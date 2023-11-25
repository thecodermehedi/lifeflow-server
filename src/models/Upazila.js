const {model, Schema} = require("../utils/mongoose");

const upazilaSchema = new Schema({
  id: String,
  division_id: String,
  name: String,
  bn_name: String,
  lat: String,
  lon: String,
  url: String,
});

module.exports = model("Upazila", upazilaSchema);
