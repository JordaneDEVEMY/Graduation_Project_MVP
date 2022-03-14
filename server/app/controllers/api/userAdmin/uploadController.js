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
    console.log('file: uploadController.js ~ line 18 ~ uploadAvatar ~ file', file);
    const fileName = `${req.body.lastname}-${req.body.social_security_number}.jpg`;
    console.log('file: uploadController.js ~ line 20 ~ uploadAvatar ~ fileName', fileName);

    file = fileName;
    // await pipeline(
    //   req.file.stream,
    //   fs.createWriteStream(
    //     `${__dirname}/../client/src/Assets/images/avatars/${fileName}`,
    //   ),
    // );
    // console.log('file: uploadController.js ~ line 25 ~ uploadAvatar ~ pipeline', pipeline);
    res.send({ imagePath: `server/app/public/uploads/avatars/${fileName}` });
  },

};

module.exports = controller;
