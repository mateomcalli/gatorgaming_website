import express from 'express'
import Session from '../models/Sessions.js'

const router = express.Router()
const password = process.env.ADMIN_PW

router.post('/', async (req, res) => {
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
      secure: true, // set to true in deployment as well
      sameSite: 'lax' // ONLY IF USING VERCEL/RENDER, if not set to strict
    })

    const session = await Session.create({
      sessionId: sessionId,
      expiryDate: expiryDate
    })

    res.status(200).json(session)
  } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'login server issue' })
  }
})

export default router