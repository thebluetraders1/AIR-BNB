const express = require('express');
const router = express.Router();
const { createListing, getListings, boostListing } = require('../controllers/listingController');
const { auth, ownerOnly } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/', auth, ownerOnly, upload.array('images'), createListing);
router.get('/', getListings);
router.post('/:id/boost', auth, ownerOnly, boostListing);

module.exports = router;
