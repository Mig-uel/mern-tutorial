const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// GET -> all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })

  res.status(200).json(workouts)
}

// GET -> single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid workout ID' })
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(400).json({ error: 'No such workout exists' })
  }

  res.status(200).json(workout)
}

// CREATE -> new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body

  // add doc to database
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    })

    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// DELETE -> single workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid workout ID' })
  }

  const workout = await Workout.findOneAndDelete({ _id: id })

  if (!workout) {
    return res.status(400).json({ error: 'No such workout exists' })
  }

  res.status(200).json(workout)
}

// UPDATE -> single workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid workout ID' })
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  )

  if (!workout) {
    return res.status(400).json({ error: 'No such workout exists' })
  }

  res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
}
