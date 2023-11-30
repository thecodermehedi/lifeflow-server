const Request = require("../../../models/Request");

const getRequestsByStatus = async (req, res) => {
  try {
    const requests = await Request.find({status: "pending"});
    res.status(200).json(requests);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

module.exports = getRequestsByStatus;
