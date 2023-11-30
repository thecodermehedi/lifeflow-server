const Funding = require("../../../models/Funding");

const addPayment = async (req, res) => {
  try {
    const payment = req.body;
    const result = await Funding.create(payment);
    res.status(201).send({
      message: "Payment added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in adding payment",
    });
  }
};

module.exports = addPayment;