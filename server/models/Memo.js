const mongoose = require('mongoose');

const MemoSchema = new mongoose.Schema({
  writer: {
    type: String,
    default: ''
  },
  contents: {
    type: String,
    default: ''
  },
  starred: {
    type: [String],
    default: ''
  },
  date: {
    create: {type: Date, default: Date.now},
    edited: {type: Date, default: Date.now}
  },
  isEdited: {
    type: Boolean, default: false 
  }
});

module.exports = mongoose.model('Memo', MemoSchema);
