const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Availability = sequelize.define('Availability', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

module.exports = Availability;
