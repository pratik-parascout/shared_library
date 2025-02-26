const sequelize = require('./db');
const models = require('./models/associations');
const initializeDb = require('../init');

module.exports = {
  sequelize,
  models,
  initializeDb,
};
