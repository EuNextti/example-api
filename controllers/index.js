const controllers = require('express').Router();

console.log('Start controller: test');
controllers.use('/test', require('./test.controller'));

module.exports = controllers;
