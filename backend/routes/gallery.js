import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import multer from 'multer'
import 'dotenv/config'
import { v2 as cloudinary } from 'cloudinary'
import Album from '../models/Album.js'

const router = express.Router()

// the following segments create a folder in the server that will hold uploaded files, to be deleted after cloudinary upload
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uploadsFolder = path.join(__dirname, 'temp_uploads')

if (!fs.existsSync(uploadsFolder)) {
  fs.mkdirSync(uploadsFolder, { recursive: true })
}

// sets up multer with temporary folder for uploaded photos 
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
    const albums = await Album.find({})
    res.status(200).json(albums)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'encountered server issue with getting gallery albums' })
  }
})

router.post('/', upload.fields([{ name: 'coverImage', maxCount: 1 }, {name: 'images', maxCount: 30 }]), async (req, res) => {
  try {
    const { title } = req.body

    const coverImagePath = req.files.coverImage[0].path
    const response = await cloudinary.uploader.upload(coverImagePath, {
      folder: title,
      public_id: 'Cover Image',
      overwrite: true
    })
    const coverImageUrl = response.secure_url

    const imageUrls = []
    for (const img of req.files.images) {
      const response = await cloudinary.uploader.upload(img.path, {
        folder: title
      })
      const imageUrl = response.secure_url
      imageUrls.push(imageUrl)
    }

    for (const file of fs.readdirSync(uploadsFolder)) {
      fs.unlinkSync(path.join(uploadsFolder, file))
    }

    const newAlbum = await Album.create({
      title: title,
      coverImage: coverImageUrl,
      images: imageUrls
    })

    res.status(200).json(newAlbum)
  } catch (error) {
    res.status(500).json({ error: 'encountered server issue with adding a new album' })
  }
})

router.delete('/:title', async (req, res) => {
  try {
    const title = req.params.title
    await cloudinary.api.delete_resources_by_prefix(`${title}/`)
    await cloudinary.api.delete_folder(title)
    const response = await Album.findOneAndDelete({ title: title })
    if (!response) {
      return res.status(404).json({ error: `album "${title}" does not exist in the database!` })
    }
    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'encountered server issue when trying to delete album' })
  }
})

export default router