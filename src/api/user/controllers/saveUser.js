const User = require("../../../models/User");

// Save user
const saveUser = async (req, res) => {
  try {
    const newUser = req.body;

    // Save new user to database
    const savedUser = await User.create(newUser);

    // Send success response
    res
      .status(201)
      .json({message: "User created successfully", user: savedUser});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Failed to save user"});
  }
};

module.exports = saveUser;
