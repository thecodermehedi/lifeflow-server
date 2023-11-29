const User = require("../../../models/User");

// Get users
const getUsers = async (req, res) => {
  try {
    let query = {};
    const validRoles = ["donor", "volunteer", "admin"];
    if (req.query.role && validRoles.includes(req.query.role)) {
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
