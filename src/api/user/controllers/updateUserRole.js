const User = require("../../../models/User");

// Update Status
const updateUserRole = async (req, res) => {
  const {id} = req.params;
  const {role} = req.body;
  try {
    const result = await User.findOneAndUpdate({_id: id}, {role});
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(503).send({message: "User Unavailable"});
  }
};

module.exports = updateUserRole;
