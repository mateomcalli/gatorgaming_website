import 'dotenv/config'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'dmd5rgmyz',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const listResources = async () => { // lists first ten resources
  try {
    const firstTen = await cloudinary.api.resources()
    console.log(firstTen)
  } catch (error) {
    console.error('Error:', error)
  }
}

const uploadImage = async () => {
  try {
    
  } catch (error) {
    console.error('Error:', error)
  }
}
