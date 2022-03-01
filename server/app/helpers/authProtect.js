const jwt = require('jsonwebtoken');
// ? const asyncHandler = require('express-async-handler');
const authDatamapper = require('../models/website/auth');
const { WebsiteError } = require('./errorHandler');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization
    && req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await authDatamapper.findOne(decoded.id).select('-password');

      next();
    } catch (err) {
      console.log(err);
      throw new WebsiteError(401, 'Accès non autorisé');
    }
  }

  if (!token) {
    res.status(401);
    throw new WebsiteError(401, 'Token manquant, accès non autorisé');
  }
};

module.exports = { protect };
