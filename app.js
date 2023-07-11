require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to my application.' });
});

app.use('/api/v1', require('./controllers/index'));

module.exports = app;
