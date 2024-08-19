const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, 'supersupersecret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json('Invalid token');
  }
};

module.exports = auth;