const Booking = require('../models/Booking');
const Listing = require('../models/Listing');
const stripe = require('stripe')('sk_test_...');

exports.createBooking = async (req, res) => {
  const { listingId, checkIn, checkOut, depositToken } = req.body;
  const listing = await Listing.findById(listingId);
  // Charge deposit via Stripe
  const charge = await stripe.paymentIntents.create({
    amount: listing.price * 0.2 * 100, // 20% deposit
    currency: 'usd',
    payment_method: depositToken,
    confirm: true
  });
  const booking = new Booking({
    user: req.user.id,
    listing: listingId,
    checkIn,
    checkOut,
    deposit: listing.price * 0.2,
    status: 'confirmed'
  });
  await booking.save();
  res.json(booking);
};

exports.getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate('listing');
  res.json(bookings);
};