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

const uploadPersonImage = async () => { // returns a useable cloudinary link of a transformed image meant to fit on the team page.
  try {
    const uploadResponse = await cloudinary.uploader.upload('../public/people/test_guy.png')
    const transformedImage = cloudinary.url(uploadResponse.public_id, {
      transformation: [
        {
          quality: 'auto:best', 
          gravity: 'face:center', 
          width: '206', 
          height: '135',
          crop: 'fill'
        }
      ],
      format: 'jpg'
    })
    return transformedImage
  } catch (error) {
    console.error('Error:', error)
  }
}