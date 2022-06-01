// Controller for text data

// Require the text model

const Text = require('../models/text');

// Add text data
const addText = (req, res) => {
  const newText = new Text(req.body);
  newText.save((err, text) => {
    if (err) {
      res.send(err);
      // res.redirect('/create');
    }
    // res.json(text);
    // after 2 seconds redirect to the home page
    setTimeout(() => {
      res.redirect('/');
    }, 2000);
  });
  // res.redirect('/');
};

const getText = (req, res) => {
  Text.find({}, (err, text) => {
    if (err) {
      res.send(err);
    }
    res.json(text);
  });
};

const readPost = async (req, res) => {
  // Get the id of the post we want to read that is not in the params

  const postId = req.params.id;
  const post = await Text.findById(postId);

  // Get all the comment desc of the post
  // const comments = await .find({ postId });

  res.render('readText/readText', { post });
};

module.exports = { addText, getText, readPost };
