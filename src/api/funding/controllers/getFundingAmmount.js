const Funding = require("../../../models/Funding");

const getFundingAmmount = async (req, res) => {
  try {
    const result = await Funding.aggregate([
      {
        $group: {
          _id: null,
          total: {$sum: "$amount"},
        },
      },
    ]);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in getting funding ammount",
    });
  }
};

module.exports = getFundingAmmount;
