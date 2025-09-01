import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { rateLimit } from 'express-rate-limit'
import Session from './models/Sessions.js'
import loginRoutes from './routes/login.js'
import eventsRoutes from './routes/events.js'
import membersRoutes from './routes/members.js'
import lanInfoRoutes from './routes/laninfo.js'
import galleryRoutes from './routes/gallery.js'

const app = express()
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173'
app.use(cors({ origin: allowedOrigin, credentials: true })) // necessary to send req from frontend
app.use(express.json()) // necessary to parse json data (req.body)
app.use(cookieParser())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
	ipv6Subnet: 52,
})

app.use(limiter)

const url = process.env.MONGO_URI

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.log('Error connecting to MongoDB:', error.message))

const checkCookie = async (req, res, next) => {
  try {
    if (req.method === 'GET') return next()
      const cookie = req.cookies?.session
      const match = await Session.findOne({ sessionId : cookie })
      if (!cookie || !match) {
        return res.status(401).json({ error: 'session cookie not detected!' })
      }
      return next()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'server issue while trying to authenticate cookies' })
  }
}

app.use('/api/login', loginRoutes)
app.use('/api/events', checkCookie, eventsRoutes)
app.use('/api/members', checkCookie, membersRoutes)
app.use('/api/laninfo', checkCookie, lanInfoRoutes)
app.use('/api/gallery', checkCookie, galleryRoutes)

app.get('/', (req, res) => {
  res.send('<p>Gator Gaming Backend API</p>')
})

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