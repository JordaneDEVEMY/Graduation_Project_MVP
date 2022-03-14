// ? Datamapper ?
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

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
    const { file } = req;
    console.log('file: uploadController.js ~ line 18 ~ uploadAvatar ~ file', file);
    const fileName = `${req.body.name}.jpg`;
    console.log('file: uploadController.js ~ line 20 ~ uploadAvatar ~ fileName', fileName);

    // await pipeline(
    //   req.file.stream,
    //   fs.createWriteStream(
    //     `${__dirname}/../client/src/Assets/images/avatars/${fileName}`,
    //   ),
    // );
    // console.log('file: uploadController.js ~ line 25 ~ uploadAvatar ~ pipeline', pipeline);
    res.send('image upload');
  },

};

module.exports = controller;
