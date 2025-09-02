const express = require('express');
const mongoose = require('mongoose');
const i18n = require('i18n');
const app = express();

mongoose.connect('mongodb://localhost/bnb');
app.use(express.json());
i18n.configure({ locales: ['en', 'fr', 'es'], directory: __dirname + '/locales' });
app.use(i18n.init);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/listings', require('./routes/listings'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/admin', require('./routes/admin'));

app.listen(3001, () => console.log('Server running'));
