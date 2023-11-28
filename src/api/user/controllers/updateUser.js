const User = require("../../../models/User");

// Update user
const updateUser = async (req, res) => {
  const {email} = req.params;
  const newUserData = req.body;
  try {
    const result = await User.updateOne({email}, newUserData);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Failed to update user"});
  }
};
module.exports = updateUser;
