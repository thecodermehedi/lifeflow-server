const Request = require("../../../models/Request");

const getTotalRequests = async (req, res) => {
  try {
    const result = await Request.estimatedDocumentCount();
    res.status(200).send({total: result});
  } catch (error) {
    console.log(error);
    res.status(503).send({message: "Requests Unavailable"});
  }
};

module.exports = getTotalRequests;
