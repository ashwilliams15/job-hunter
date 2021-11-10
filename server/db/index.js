//this is the access point for all things database related!
const db = require("./db");
const Technologies = require("./models/Technologies");
const Companies = require("./models/Companies");
const Contacts = require("./models/Contacts");

//associations could go here!

module.exports = {
  db,
  models: {
    Technologies,
    Companies,
    Contacts,
  },
};
