const Sequelize = require('sequelize');
const db = require('../db');

const Companies = db.define('companies', {
  name: {
    type: Sequelize.STRING,
  },
  notes: {
    type: Sequelize.TEXT
  }
})

module.exports = Companies
