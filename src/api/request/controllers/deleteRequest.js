const Request = require("../../../models/Request");

const deleteRequest = async (req, res) => {
  const {id} = req.params;
  try {
    const result = await Request.deleteOne({_id: id});
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(503).send({message: "Request Unavailable"});
  }
};

module.exports = deleteRequest;