const express = require('express');
const newsController = require('./../controllers/newsController');


const router = express.Router();


router
  .route('/')
  .get(newsController.getAllNews);

module.exports = router;