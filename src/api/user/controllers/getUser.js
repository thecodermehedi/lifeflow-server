const User = require("../../../models/User");

// Get user role
const getUser = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await User.findOne({email});
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(503).send({message: "User Unavailable"});
  }
};

module.exports = getUser;
