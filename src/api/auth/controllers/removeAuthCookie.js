const {nodeEnv} = require("../../../config");

const removeAuthCookie = async (req, res) => {
  try {
    res
      .clearCookie("jwt", {
        maxAge: 0,
        secure: nodeEnv === "production",
        sameSite: nodeEnv === "production" ? "none" : "strict",
      })
      .send({success: true});
  } catch (error) {
    console.log(error);
    res.status(500).send({success: false});
  }
};

module.exports = removeAuthCookie;
