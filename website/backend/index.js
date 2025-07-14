const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors()) // necessary to send req from frontend
app.use(express.json()) // necessary to parse json data
const port = 3000

let events = [
  {
    id: '1',
    title: "Smash Bros Tournament",
    date: "2025-08-10",
    location: "UF Reitz Union Game Room"
  },
  {
    id: '2',
    title: "Board Game Night",
    date: "2025-08-17",
    location: "Santa Fe College Student Center"
  },
  {
    id: '3',
    title: "LAN Party & Pizza",
    date: "2025-08-24",
    location: "Cade Museum Community Room"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Gs twin</h1>')
})

app.get('/api/events', (req, res) => {
  res.json(events)
})

app.get('/api/events/:id', (req, res) => {
  const id = req.params.id
  const match = events.find(event => event.id === id)
  if (match) {
    res.json(match)
  }
  else {
    res.status(404).json({ error: 'event not found' })
  }
})

app.post('/api/events/', (req, res) => {
  const body = req.body
  
  const event = {
    title: body.title,
    location: body.location,
    date: body.date,
    time: body.time
  }

  events = events.concat(event)
  res.json(event)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})