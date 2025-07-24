import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Event from './models/Events.js'
import Session from './models/Sessions.js'

const app = express()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
})) // necessary to send req from frontend
app.use(express.json()) // necessary to parse json data (req.body)
app.use(cookieParser())

const url = process.env.MONGO_URI
const password = process.env.ADMIN_PW

const generateId = async () => {
  const events = await Event.find()
  const ids = events.map(event => Number(event.id))
  const maxId = ids.length > 0 ? Math.max(...ids) : 0
  return String(maxId + 1)
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
    console.error(error)
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
      expiryDate: body.expiryDate,
      time: body.time,
      link: body.link
    })
    console.log(`Event ${event.title} successfully created!`)
    res.json(event)
  } catch (error) {
    console.error(error)
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
    console.error(error)
    res.status(500).json({ error: 'there was a server issue deleting this event, please try again later' })
  }
})

app.post('/api/login', async (req, res) => {
  try {
    const userEntry = req.body.password
    if (userEntry !== password) {
      return res.status(401).json({ error: 'incorrect password' })
    }
    const sessionId = 'admin-' + Date.now() + '-' + Math.random().toString().split('.')[1]
    const currentDate = new Date()
    const expiryDate = new Date(currentDate)
    expiryDate.setHours(expiryDate.getHours() + 24)

    console.log('Setting cookie with sessionId:', sessionId)
    res.cookie('session', sessionId, { 
      expires: expiryDate,
      httpOnly: true,
      secure: false, // set to true in deployment as well
      sameSite: 'lax' // ONLY IF USING VERCEL/RENDER, if not set to strict
    })

    const session = await Session.create({
      sessionId: sessionId,
      expiryDate: expiryDate
    })

    res.json(session)
  } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'login server issue' })
  }
})

app.get('/api/auth', async (req, res) => {
  try {
    const sessionCookie = req.cookies.session
    const match = Session.findOne({ sessionCookie })
    if (!sessionCookie || !match) {
      return res.status(401).json({ error: 'invalid session, login again' })
    }
    console.log(`authorized with id: ${sessionCookie}`)
    res.json({ message: `authorized with id: ${sessionCookie}`})
  } catch (error) {
    console.error(error)
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('Server running on port:', PORT)
})