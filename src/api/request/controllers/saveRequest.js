const Request = require("../../../models/Request");

// Save user
const saveRequest = async (req, res) => {
  try {
    const newRequest = req.body;

    // Save new request to database
    const savedRequest = await Request.create(newRequest);

    // Send success response
    res
      .status(201)
      .json({message: "Request created successfully", request: savedRequest});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Failed to save request"});
  }
};

module.exports = saveRequest;
