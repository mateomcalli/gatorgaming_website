import { model, Schema } from 'mongoose'

const albumSchema = new Schema({
  title: String,
  dateAdded: {
    type: Date,
    default: Date.now
  },
  coverImage: String,
  images: [String]
})

const Album = model('album', albumSchema)

export default Album