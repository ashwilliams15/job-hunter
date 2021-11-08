const router = require('express').Router()
const { models: { Technologies }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const technologies = await Technologies.findAll();
    res.json(technologies)
  } catch (err) {
    next(err)
  }
})
