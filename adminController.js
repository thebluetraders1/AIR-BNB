const User = require('../models/User');
const Listing = require('../models/Listing');

exports.withdraw = async (req, res) => {
  // ...existing code...
  // Implement withdrawal logic (e.g., via Stripe or manual)
  res.json({ message: 'Withdrawal processed' });
};

exports.getAllUsers = async (req, res) => {
  // ...existing code...
  const users = await User.find();
  res.json(users);
};

exports.getAllListings = async (req, res) => {
  // ...existing code...
  const listings = await Listing.find();
  res.json(listings);
};