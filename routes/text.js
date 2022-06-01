const express = require('express');

const { addText, getText, readPost } = require('../controllers/text');

const router = express.Router();

router.get('/create', (req, res) => {
  res.render('newText/editor');
});

router.post('/create', addText);
router.get('/get', getText);
router.get('/read/:id', readPost);

module.exports = router;
