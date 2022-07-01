const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (res, req) => {
  res.json({
    message: 'GET ALL WORKOUTS',
  })
})

// GET a single workout
router.get('/:id', (res, req) => {
  res.json({
    message: 'GET A SINGLE WORKOUT',
  })
})

// POST a new workout
router.post('/', (req, res) => {
  res.json({
    message: 'POST A NEW WORKOUT',
  })
})

router.delete('/:id', (req, res) => {
  res.json({
    message: 'DELETE A WORKOUT',
  })
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({
    message: 'UPDATE A WORKOUT'
  })
})

module.exports = router
