import express from 'express'
import Event from '../models/Events.js'

const router = express.Router()

const generateId = async () => {
  const events = await Event.find()
  const ids = events.map(event => Number(event.id))
  const maxId = ids.length > 0 ? Math.max(...ids) : 0
  return String(maxId + 1)
}

router.get('/', async (req, res) => {
  try {
    const events = await Event.find({})
    res.status(200).json(events)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'issue fetching events'})
  }
})

router.post('/', async (req, res) => {
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
    res.status(200).json(event)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'encountered server issue with adding new event to the database'})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const match = await Event.findOneAndDelete({ id: id })
    if (!match) {
      res.status(404).json({ error: `event with id ${id} doesn't exist`})
    } else {
      console.log(`Event ${match.title} successfully deleted!`)
      res.status(200).json(match)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'there was a server issue deleting this event, please try again later' })
  }
})

export default router