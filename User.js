const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['guest', 'owner', 'admin'], default: 'guest' },
  subscription: {
    type: String,
    enum: ['free', 'silver', 'gold', 'platinum'],
    default: 'free'
  },
  balance: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);
