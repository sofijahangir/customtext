const mongoose = require('mongoose');

const textSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

const Text = mongoose.model('Text', textSchema);

module.exports = Text;
