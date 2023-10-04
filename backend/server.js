require('dotenv').config()

const express = require('express')

// Express app
const app = express()

// Routes
app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log('Listening on port ', process.env.PORT)
})

