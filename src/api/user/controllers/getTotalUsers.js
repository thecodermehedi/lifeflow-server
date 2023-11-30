const User = require("../../../models/User");

const getTotalUsers = async (req, res) => {
  try {
    const result = await User.estimatedDocumentCount();
    res.status(200).send({total: result});
  } catch (error) {
    console.log(error);
    res.status(503).send({message: "Users Unavailable"});
  }
};

module.exports = getTotalUsers;