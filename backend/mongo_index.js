import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Session from './models/Sessions.js'
import loginRoutes from './routes/login.js'
import eventsRoutes from './routes/events.js'
import membersRoutes from './routes/members.js'
import lanInfoRoutes from './routes/laninfo.js'
import galleryRoutes from './routes/gallery.js'

const app = express()
app.use(cors({ origin: 'http://localhost:5173', credentials: true })) // necessary to send req from frontend
app.use(express.json()) // necessary to parse json data (req.body)
app.use(cookieParser())

const url = process.env.MONGO_URI

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.log('Error connecting to MongoDB:', error.message))

app.use('/api/login', loginRoutes)
app.use('/api/events', eventsRoutes)
app.use('/api/members', membersRoutes)
app.use('/api/laninfo', lanInfoRoutes)
app.use('/api/gallery', galleryRoutes)

app.get('/api/auth', async (req, res) => {
  try {
    const sessionCookie = req.cookies.session
    const match = await Session.findOne({ sessionId : sessionCookie })
    if (!sessionCookie || !match) {
      return res.status(401).json({ error: 'invalid session, login again' })
    }
    console.log(`authorized with id: ${sessionCookie}`)
    res.json({ message: `authorized with id: ${sessionCookie}`})
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'authentication server issue' })
  }
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('Server running on port:', PORT)
})