const User = require("../../../models/User");

// Update Status
const updateUserStatus = async (req, res) => {
  const {id} = req.params;
  const {status} = req.body;
  try {
    const result = await User.findOneAndUpdate(
      {_id: id},
      {status: status},
      {new: true}
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(503).send({message: "User Unavailable"});
  }
};

module.exports = updateUserStatus;
