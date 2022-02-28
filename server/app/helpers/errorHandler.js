const ApiError = require('../errors/apiError');
const WebsiteError = require('../errors/websiteError');
/**
  * Middleware that respond to a next method with an error as argument
  * @param {object} err Error class
  * @param {object} res Express response object
  */
const errorHandler = (err, res) => {
  let { statusCode, message } = err;

  statusCode = statusCode ?? 500;

  if (statusCode === 500) {
    console.error(err);
<<<<<<< HEAD

  }

  if (statusCode === 500 && res.app.get('env') !== 'development') {
=======
>>>>>>> fdebe31fcb7c8e7b3aa053e1bc4e16b8a601ca05
    message = 'Internal Server Error';

  }

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = {
  ApiError,
  WebsiteError,
  errorHandler,
};
