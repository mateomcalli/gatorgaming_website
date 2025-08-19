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
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173'
app.use(cors({ origin: allowedOrigin, credentials: true })) // necessary to send req from frontend
app.use(express.json()) // necessary to parse json data (req.body)
app.use(cookieParser())

const url = process.env.MONGO_URI

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.log('Error connecting to MongoDB:', error.message))

const checkApiKey = (req, res, next) => {
  if (req.method === 'GET') return next()
  const key = req.headers['api-key']
  if (!key || key !== process.env.API_KEY) {
    return res.status(401).json({ error: 'api key not detected!' })
  }
  next()
}

app.use('/api/login', checkApiKey, loginRoutes)
app.use('/api/events', checkApiKey, eventsRoutes)
app.use('/api/members', checkApiKey, membersRoutes)
app.use('/api/laninfo', checkApiKey, lanInfoRoutes)
app.use('/api/gallery', checkApiKey, galleryRoutes)

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