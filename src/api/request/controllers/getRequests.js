const Request = require("../../../models/Request");

const getRequests = async (req, res) => {
  try {
    let query = {};
    const userMail = req?.params?.email;
    if (userMail) {
      query.email = userMail;
    }
    const result = await Request.find(query).sort({ dateTime: -1 });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(503).send({message: "Requests Unavailable"});
  }
};

module.exports = getRequests;
