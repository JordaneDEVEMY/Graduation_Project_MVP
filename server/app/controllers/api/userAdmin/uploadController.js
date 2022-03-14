// ? Datamapper ?
// const fs = require('fs');
// const { promisify } = require('util');
// const pipeline = promisify(require('stream').pipeline);

// ! const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to upload avatar
   * ExpressMiddleware signature
   * @param {object} req Express req.object
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async uploadAvatar(req, res) {
    let { file } = req;

    const fileName = `${req.body.lastname}-${req.body.social_security_number}.jpg`;

    file = fileName;

    res.send({ imagePath: `http://localhost:4000/uploads/avatars/${fileName}` });
  },

};

module.exports = controller;
