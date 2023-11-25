const {model, Schema} = require("../utils/mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  role: String,
  status: String,
  bloodGroup: String,
  district: String,
  upazila: String,
});

const User = model("User", userSchema);

module.exports = User;
