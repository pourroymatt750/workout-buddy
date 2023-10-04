const express = require('express')

// Express app
const app = express()

// Routes
app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})

// Listen for requests
app.listen(4000, () => {
  console.log('Listening on port 4000')
})