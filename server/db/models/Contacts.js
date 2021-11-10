const Sequelize = require("sequelize");
const db = require("../db");

const Contacts = db.define("contacts", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  linkedIn: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
});

module.exports = Contacts;
