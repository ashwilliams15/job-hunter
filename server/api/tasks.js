const router = require('express').Router()
const { models: { Tasks }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const tasks = await User.findAll();
    res.json(tasks)
  } catch (err) {
    next(err)
  }
})
