const {model, Schema} = require("../utils/mongoose");

const districtSchema = new Schema({
  id: String,
  division_id: String,
  name: String,
  bn_name: String,
  lat: String,
  lon: String,
  url: String,
});

const District = model("District", districtSchema);
module.exports = District;
