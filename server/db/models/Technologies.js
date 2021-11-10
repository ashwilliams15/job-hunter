const Sequelize = require("sequelize");
const db = require("../db");

const Technologies = db.define("technologies", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  checked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Technologies;
