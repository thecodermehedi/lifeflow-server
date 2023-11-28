const User = require("../../../models/User");

// Get users
const getUsers = async (req, res) => {
  try {
    let query = {};
    if (req.query.role) {
      query.role = req.query.role;
    }
    const users = await User.find(query);
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(503).send({message: "Users Unavailable"});
  }
};

module.exports = getUsers;
