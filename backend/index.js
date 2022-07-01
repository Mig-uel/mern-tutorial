// import/require dotenv file
require('dotenv').config()

// import/require express framework
const express = require('express')

const workoutRoutes = require('./routes/workouts')

// init express app
const app = express()

// middleware (runs first then routes)
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
