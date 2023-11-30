const User = require("../../../models/User");

// Get users
const getDonors = async (req, res) => {
  try {
    const donors = await User.find({role: "donor"});
    res.send(donors);
  } catch (error) {
    console.error(error);
    res.status(503).send({message: "Users Unavailable"});
  }
};

module.exports = getDonors;
