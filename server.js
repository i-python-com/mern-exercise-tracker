const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const uri =
  'mongodb+srv://admin:mean123@cluster0-yxvzh.gcp.mongodb.net/mern_exercise_tracker?retryWrites=true&w=majority'

mongoose.connect(uri, {
  // connect local mongodb without username and password
  useNewUrlParser: true,
  useCreateIndex: true
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

// Serve the static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
