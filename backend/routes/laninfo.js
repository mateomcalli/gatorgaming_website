import express from 'express'
import LanInfo from '../models/LanInfo.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const lanInfo = await LanInfo.findOne({})
    res.status(200).json(lanInfo)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'encountered server issue while fetching gatorlan info' })
  }
})

router.post('/', async (req, res) => {
  try {
    const body = req.body
    await LanInfo.deleteMany({})
    const response = await LanInfo.create({
      semester: body.semester,
      year: body.year,
      dateRange: body.dateRange
    })
    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'encountered server issue while saving gatorlan info' })
  }
})

export default router