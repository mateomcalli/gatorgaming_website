import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import Event from './models/events.js'

const app = express()
app.use(cors()) // necessary to send req from frontend
app.use(express.json()) // necessary to parse json data (req.body)

const url = process.env.MONGO_URI

const generateId = async () => {
  const events = await Event.countDocuments({})
  return String(events + 1)
}

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.log('Error connecting to MongoDB:', error.message))

app.get('/', (req, res) => {
  res.send(`
    <h1>Gator Gaming Backend API</h1>
    <p>Use command '/api/events' to view all events, or filter by id with '/api/events/id'</p>
  `)
})

app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find({})
    res.json(events)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'issue fetching events'})
  }
})

app.post('/api/events', async (req, res) => {
  try {
    const body = req.body
    const event = await Event.create({
      id: await generateId(),
      title: body.title,
      location: body.location,
      date: body.date,
      time: body.time
    })
    console.log(`Event ${event.title} successfully created!`)
    res.json(event)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'server issue with adding new event to the database'})
  }
})

app.delete('/api/events/:id', async (req, res) => {
  try {
    const id = req.params.id
    const match = await Event.findOneAndDelete({ id: id })
    if (!match) {
      res.status(404).json({ error: `event with id ${id} doesn't exist`})
    } else {
      console.log(`Event ${match.title} successfully deleted!`)
      res.json(match)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'there was a server issue deleting this event, please try again later' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('Server running on port:', PORT)
})