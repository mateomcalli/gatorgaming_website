import express from 'express'
import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import multer from 'multer'
import Member from '../models/Members.js'
import { v2 as cloudinary } from 'cloudinary'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uploadsFolder = path.join(__dirname, 'temp_member_uploads')

if (!fs.existsSync(uploadsFolder)) {
  fs.mkdirSync(uploadsFolder, { recursive: true })
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsFolder)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

cloudinary.config({
  cloud_name: 'dmd5rgmyz',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

router.get('/', async (req, res) => {
  try {
    const members = await Member.find({})
    res.status(200).json(members)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'encountered server issue with getting members' })
  }
})

router.post('/', upload.single('picture'), async (req, res) => {
  try {
    const body = req.body
    const sanitizedName = body.name.toLowerCase().replace(/ /g, '_')
    const pictureFilePath = req.file.path
    const response = await cloudinary.uploader.upload(pictureFilePath, {
      folder: 'People',
      public_id: `${sanitizedName}`,
      overwrite: true,
      transformation: [
        { gravity: 'auto' }
      ]
    })
    const pictureLink = response.secure_url

    for (const file of fs.readdirSync(uploadsFolder)) {
      fs.unlinkSync(path.join(uploadsFolder, file))
    }

    const newMember = await Member.create({
      name: body.name,
      position: body.position,
      hp: body.hp,
      picture: pictureLink,
      favoriteGames: body.favoriteGames,
      aboutMe: body.aboutMe
    })

    res.status(200).json(newMember)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'encountered server issue trying to add a new member' })
  }
})

router.delete('/:name/:id', async (req, res) => {
  try {
    const id = req.params.id
    const name = req.params.name
    await cloudinary.uploader.destroy(`People/${name}`)
    const deletedMember = await Member.findOneAndDelete({ _id: id })
    if (!deletedMember) {
      return res.status(404).json({ error: `member with id ${id} does not exist in the database!` })
    }
    res.status(200).json(deletedMember)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'encountered server issue with deleting member' })
  }
})

export default router