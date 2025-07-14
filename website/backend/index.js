const express = require('express')
const app = express()
const port = 3000

const events = [
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})