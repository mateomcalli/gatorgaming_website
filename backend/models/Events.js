import { Schema, model } from 'mongoose'

const eventSchema = new Schema({
  id: String,
  title: String,
  location: String,
  date: String,
  time: String,
  expiryDate: Date,
  link: String
})

eventSchema.index({ expiryDate: 1 }, { expireAfterSeconds: 0 })
const Event = model('event', eventSchema)

export default Event


