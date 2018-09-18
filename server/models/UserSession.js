const mongoose = require('mongoose');

const UserSeesionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  firstName: {
    type: String,
    default: '',
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('UserSession', UserSeesionSchema);
