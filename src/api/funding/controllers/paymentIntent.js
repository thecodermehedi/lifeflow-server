const {stripeSecretKey} = require("../../../config");

const stripe = require("stripe")(stripeSecretKey);

const paymentIntent = async (req, res) => {
  try {
    const {amount} = req.body;
    const parseAmount = parseInt(amount * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseAmount,
      currency: "USD",
      payment_method_types: ["card"],
    });
    res.send({
      message: "Payment Intent Created",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in creating payment intent",
    });
  }
};

module.exports = paymentIntent;
