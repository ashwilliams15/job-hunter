const router = require("express").Router();
const {
  models: { Technologies },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const technologies = await Technologies.findAll();
    res.json(technologies);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const technology = await Technologies.create(req.body);
    res.json(technology);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const technology = await Technologies.findByPk(req.params.id);
    await technology.update({ checked: !req.body.checked });
    res.send(technology);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const technology = await Technologies.findByPk(req.params.id);
    technology.destroy();
    res.json(technology);
  } catch (err) {
    next(err);
  }
});
