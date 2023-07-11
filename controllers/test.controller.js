const express = require('express');

const TestController = express.Router();

TestController.get('/', async (req, res) => {
  res.status(200).json('Hello World');
});

module.exports = TestController;
