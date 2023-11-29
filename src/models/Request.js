const {model, Schema} = require("../utils/mongoose");

const requestSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  recipent: {type: String, required: true},
  hospital: {type: String, required: true},
  district: {type: String, required: true},
  upazila: {type: String, required: true},
  address: {type: String, required: true},
  message: {type: String, required: true},
  date: {type: String, required: true},
  time: {type: String, required: true},
  dateTime: {type: Date, required: true},
  status: {type: String, required: true},
  donorName: {type: String, default: ""},
  donorMail: {type: String, default: ""},
});

const Request = model("Request", requestSchema);
module.exports = Request;
