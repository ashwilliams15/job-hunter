const router = require("express").Router();
const {
  models: { Companies },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const companies = await Companies.findAll();
    res.json(companies);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const company = await Companies.create(req.body);
    res.json(company);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const company = await Companies.findByPk(req.params.id);
    await company.destroy();
    res.json(company);
  } catch (err) {
    next(err);
  }
});
