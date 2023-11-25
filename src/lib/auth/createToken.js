const jwt = require('jsonwebtoken');
const { accessTokenSecret } = require('../../config');
const createToken = (user) => {
  const token = jwt.sign(user, accessTokenSecret, { expiresIn: '365d' });
  return token;
}

module.exports = createToken;