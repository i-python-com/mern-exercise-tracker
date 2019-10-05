const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

const uri =
  'mongodb+srv://admin:mean123@cluster0-yxvzh.gcp.mongodb.net/mern_exercise_tracker?retryWrites=true&w=majority'

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Atlas connected...'))
  .catch(err => console.log(err))

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
