const router = require("express").Router();
const {
  models: { Contacts },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const contacts = await Contacts.findAll();
    res.json(contacts);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const contact = await Contacts.create(req.body);
    res.json(contact);
  } catch (err) {
    next(err);
  }
});
