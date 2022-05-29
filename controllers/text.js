const Text = require('../models/text');

exports.getTexts = (req, res, next) => {
  Text.find()
    .select('title category SpecificTextData _id')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        texts: docs.map((doc) => {
          return {
            title: doc.title,
            category: doc.category,
            _id: doc._id,
            request: {
              type: 'GET',
              url: `http://localhost:3000/texts/${doc._id}`,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const saveText = (req, res) => {
  const text = new Text({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    category: req.body.category,
    SpecificTextData: req.body.SpecificTextData,
  });
  text
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Text created',
        createdText: {
          title: result.title,
          category: result.category,
          _id: result._id,
          request: {
            type: 'GET',
            url: `http://localhost:3000/texts/${result._id}`,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
