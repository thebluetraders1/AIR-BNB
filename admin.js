const express = require('express');
const router = express.Router();
const { withdraw, getAllUsers, getAllListings } = require('../controllers/adminController');
const { auth, adminOnly } = require('../middleware/auth');

router.post('/withdraw', auth, adminOnly, withdraw);
router.get('/users', auth, adminOnly, getAllUsers);
router.get('/listings', auth, adminOnly, getAllListings);

module.exports = router;
