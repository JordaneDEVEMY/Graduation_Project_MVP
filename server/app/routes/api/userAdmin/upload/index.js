const express = require('express');

const multer = require('multer');
// const avatarRouter = require('./avatar');
const uploadController = require('../../../../controllers/api/userAdmin/uploadController');
const controllerHandler = require('../../../../helpers/apiControllerHandler');

const router = express.Router();
const { ApiError } = require('../../../../helpers/errorHandler');

// const upload = multer({ dest: `${__dirname}/../../../../public/uploads/avatars` });

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${__dirname}/../../../../public/uploads/avatars`);
  },
  filename(req, file, cb) {
    cb(null, `${req.body.lastname}-${req.body.social_security_number}.jpg`);
  },
});

const upload = multer({ storage });

router
  .route('/avatar')
  // ! .get only for back-end dev devlopment = No docs on swagger
  .get((req, res) => {
    res.render('upload-avatar', { title: "O'lleks - API" });
  })
  .post(upload.single('image'), controllerHandler(uploadController.uploadAvatar));

router
  .route('/avatar/getFile/:path')
  .get((req, res) => {
    const { path } = req.params;
    res.setHeader('Content-type', 'text/html').write(`<img src="${__dirname}/../../../../public/uploads/avatars/${path}.jpg">`);
    res.send();
  });

router.use(() => {
  throw new ApiError(404, 'Page introuvable');
});

module.exports = router;
