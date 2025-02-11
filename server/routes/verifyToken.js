const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Unauthorize');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};
