const sequelize = require('./src/db');
const models = require('./src/models/associations');
const initializeDb = require('./init');

module.exports = {
  sequelize,
  models,
  initializeDb,
};
