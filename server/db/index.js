//this is the access point for all things database related!
const db = require('./db');
const Tasks = require("./models/Tasks");
const Companies = require('./models/Companies');


//associations could go here!

module.exports = {
  db,
  models: {
    Tasks,
    Companies
  },
}
