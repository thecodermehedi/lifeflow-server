const {model, Schema} = require("../utils/mongoose");

const fundingSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  transactionId: {type: String, required: true},
  date: {type: String, required: true},
  time: {type: String, required: true},
  amount: {type: Number, required: true},
});

const Funding = model("Funding", fundingSchema);
module.exports = Funding;
