const express = require('express');

const multer = require('multer');
// const avatarRouter = require('./avatar');
const uploadController = require('../../../../controllers/api/userAdmin/uploadController');
const controllerHandler = require('../../../../helpers/apiControllerHandler');

const router = express.Router();
const { ApiError } = require('../../../../helpers/errorHandler');

const upload = multer();

router
  .route('/avatar')
  // ! .get only for back-end dev devlopment = No docs on swagger
  .get((req, res) => {
    res.render('upload-avatar', { title: "O'lleks - API" });
  })
  .post(upload.single('image'), controllerHandler(uploadController.uploadAvatar));

router.use(() => {
  throw new ApiError(404, 'Page introuvable');
});

module.exports = router;
