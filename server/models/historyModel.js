const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  results: {
    type: Array, 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const History = mongoose.model('History', historySchema);
module.exports = History;
