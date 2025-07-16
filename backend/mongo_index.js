require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const Event = require('./models/events')

const app = express()
app.use(cors()) // necessary to send req from frontend
app.use(express.json()) // necessary to parse json data (req.body)


const url = process.env.MONGO_URI

mongoose.connect(url)
  .then(console.log('Connected to MongoDB!'))
  .catch(error => console.log('Error connecting to MongoDB:', error.message))

app.get('/api/events', (req, res) => {
  Event.find({})
    .then(events => {
      events.forEach(event => 
        console.log(`${event.title}`)
      )
      res.json(events)
    })
})

app.post('/api/events', (req, res) => {
  const body = req.body
  Event.create({
    title: body.title,
    location: body.location,
    date: body.date,
    time: body.time
  })
    .then(event => {
      console.log(`Event ${event.title} successfully created!`)
      res.json(event)
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('Server running on port:', PORT)
})