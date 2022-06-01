// Create download controller

const fs = require('fs');
const Text = require('../models/text');

// Method to create the exi and exm files

const download = async (req, res) => {
  const textId = req.params.id;
  const text = await Text.findById(textId);

  // Exi File

  const exiGen =
    `name=${text.title}\n` + `description=${text.title}\n` + `language=eng`;

  // Remove all the html tags from text.description

  const textDesc = text.description.replace(/<[^>]*>/g, '');

  const exmGen = `${textDesc}\n`;

  // Create the exi file

  fs.writeFile(`./texts/${text.title}.exi`, exiGen, (err) => {
    if (err) {
      console.log(err);
    }
  });

  // Create the exm file

  fs.writeFile(`./texts/${text.title}.exm`, exmGen, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const exi = fs.readFileSync(`./texts/${text.title}.exi`, 'utf8');

  // read the exm file and assgin it to a variable

  const exm = fs.readFileSync(`./texts/${text.title}.exm`, 'utf8');

  console.log(exi);

  // Read the files and download them

  res.setHeader(
    'Content-disposition',
    `attachment; filename=${text.title}.exi ${text.title}.exm`
  );
  res.setHeader('Content-type', 'application/text');

  res.send(exi);

  // Download the files without taking time

  // res.download(`${text.title}.exi`);
  // res.download(`./texts/${text.title}.exm`, `${text.title}.exm`);

  res.send('hello');
};

//   res.download(`./texts/${text.title}.exi`, `${text.title}.exi`);
// };

// Download the exi and exm that are in the texts folder

module.exports = { download };
