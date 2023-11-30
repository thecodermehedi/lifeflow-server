const User = require("../../../models/User");

// Get users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(503).send({message: "Users Unavailable"});
  }
};

module.exports = getUsers;
