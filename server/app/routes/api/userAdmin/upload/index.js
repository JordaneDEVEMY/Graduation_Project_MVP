const express = require('express');

const path = require('path');
const multer = require('multer');
// const avatarRouter = require('./avatar');

const { ApiError } = require('../../../../helpers/errorHandler');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'client/src/Assets/images');
  },
  filename: (req, file, cb) => {
    console.log({ file });
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router
  .route('/avatar')
  // ! .get only for back-end dev devlopment = No docs on swagger
  .get((req, res) => {
    res.render('upload-avatar', { title: "O'lleks - API" });
  })
  .post(upload.single('image'), (req, res) => {
    res.send('Image uploaded');
  });

router.use(() => {
  throw new ApiError(404, 'Page introuvable');
});

module.exports = router;
