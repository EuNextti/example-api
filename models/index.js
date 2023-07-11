const Sequelize = require('sequelize');
const config = require('../config/config');

const Users = require('./users');

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Users = Users(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
