const express = require('express');

const Texts = require('../models/text');

const router = express.Router();

/* GET home page. */

router.get('/', async (req, res) => {
  const posts = await Texts.find().sort({ createdAt: 'desc' });
  // console.log(posts);

  res.render('index', { posts });
});

// router.get('/', function (req, res, next) {
//   const texts = Texts.find({});
//   // console.log(texts);

//   //   res.render('index', { title: 'Express' });
// });

module.exports = router;
