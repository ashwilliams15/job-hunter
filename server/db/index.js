//this is the access point for all things database related!
const Tasks = require("./models/Tasks");
const db = require('./db');


//associations could go here!

module.exports = {
  db,
  models: {
    Tasks,
  },
}
