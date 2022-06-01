const express = require('express');

const { download } = require('../controllers/download');

const router = express.Router();

router.get('/download/:id', download, (req, res) => {
  res.send('Downloading...');
});

module.exports = router;
