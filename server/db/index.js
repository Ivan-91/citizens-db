const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/test';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;