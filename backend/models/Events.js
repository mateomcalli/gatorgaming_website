import { Schema, model } from 'mongoose'

const eventSchema = new Schema({
  id: String,
  title: String,
  location: String,
  date: String,
  time: String
})

const Event = model('event', eventSchema)

export default Event


