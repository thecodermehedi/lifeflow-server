const Request = require("../../../models/Request");

const updateRequest = async (req, res) => {
  const {id} = req.params;
  const newRequestInfo = req.body;
  try {
    const result = await Request.updateOne({_id: id}, newRequestInfo);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(503).send({message: "Request Unavailable"});
  }
};

module.exports = updateRequest;
