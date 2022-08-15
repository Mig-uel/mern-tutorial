// import/require dotenv file
require('dotenv').config()

// import/require express framework
const express = require('express')

// import/require mongoose
const mongoose = require('mongoose')

// import/require workoutRoutes
const workoutRoutes = require('./routes/workouts')

// import/require userRoutes
const userRoutes = require('./routes/user.route')

// init express app
const app = express()

// middleware (runs first, then routes)
app.use(express.json())

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `---------- CONNECTED TO DB | PORT: ${process.env.PORT} ----------`
      )
    })
  })
  .catch((err) => {
    console.log(err)
  })
