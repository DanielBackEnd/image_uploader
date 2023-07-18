const express = require('express');
const { getImage, uploadImage } = require('../controllers/imageController');
const { upload } = require('../utils/multerConfig');

const imageRouter = express.Router();

imageRouter
  .get('/', getImage)
  .post('/upload', upload.single('image'), uploadImage);

module.exports = {
  imageRouter,
};
