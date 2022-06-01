const mongoose = require('mongoose');

const mongoConnect = async () => {
  const connection = await mongoose.connect(process.env.ONLINE_DB, {});
  console.log('Connected to TypingMaster Online DataBase');
};

module.exports = mongoConnect;
