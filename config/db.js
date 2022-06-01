const mongoose = require('mongoose');

const mongoConnect = async () => {
  const connection = await mongoose.connect(
    'mongodb+srv://jsofi:jsofi@cluster0.ltiy2qu.mongodb.net/?retryWrites=true&w=majority',
    {}
  );
  console.log('Connected to TypingMaster Online DataBase');
};

module.exports = mongoConnect;
