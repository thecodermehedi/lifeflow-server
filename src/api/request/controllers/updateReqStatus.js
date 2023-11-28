const Request = require("../../../models/Request");

// Update Status
const updateReqStatus = async (req, res) => {
  const {id} = req.params;
  const {status} = req.body;
  try {
    const result = await Request.findOneAndUpdate({_id: id}, {status: status}, {new: true});
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(503).send({message: "Request Unavailable"});
  }
};

module.exports = updateReqStatus;
