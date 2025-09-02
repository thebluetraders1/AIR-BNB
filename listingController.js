const Listing = require('../models/Listing');
const User = require('../models/User');

exports.createListing = async (req, res) => {
  const { title, description, location, price } = req.body;
  const images = req.files.map(f => f.path);
  const listing = new Listing({
    owner: req.user.id,
    title,
    description,
    location,
    price,
    images
  });
  await listing.save();
  res.json(listing);
};

exports.getListings = async (req, res) => {
  const listings = await Listing.find().populate('owner', 'name');
  res.json(listings);
};

exports.boostListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  const user = await User.findById(req.user.id);
  if (user.subscription === 'free') {
    return res.status(403).json({ message: 'Upgrade subscription to boost' });
  }
  listing.boosted = true;
  await listing.save();
  res.json({ message: 'Listing boosted' });
};