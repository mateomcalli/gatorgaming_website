import express from 'express'
import Member from '../models/Members.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const members = await Member.find({})
    res.status(200).json(members)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'encountered server issue with getting members' })
  }
})

router.post('/', async (req, res) => {
  try {
    const body = req.body
    const newMember = await Member.create({
      name: body.name,
      position: body.position,
      hp: body.hp,
      picture: body.picture,
      favoriteGames: body.favoriteGames,
      aboutMe: body.aboutMe
    })
    res.status(200).json(newMember)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'encountered server issue trying to add a new member' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deletedEvent = await Member.findOneAndDelete({ _id: id })
    if (!deletedEvent) {
      return res.status(404).json({ error: `member with id ${id} does not exist in the database!` })
    } else {
      res.status(200).json(deletedEvent)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'encountered server issue with deleting member' })
  }
})

export default router