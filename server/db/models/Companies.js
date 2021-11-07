const Sequelize = require('sequelize');
const db = require('../db');

const Companies = db.define('companies', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Companies
