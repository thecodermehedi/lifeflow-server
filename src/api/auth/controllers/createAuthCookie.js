const {nodeEnv} = require("../../../config");
const createToken = require("../../../lib/auth/createToken");

const createAuthCookie = async (req, res, next) => {
  try {
    const user = req.body;
    const token = createToken(user);
    res
      .cookie("jwt", token, {
        httpOnly: true,
        secure: nodeEnv === "production",
        sameSite: nodeEnv === "production" ? "none" : "strict",
      })
      .send({success: true});
  } catch (error) {
    next(error);
  }
};

module.exports = createAuthCookie;