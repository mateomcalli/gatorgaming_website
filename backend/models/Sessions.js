import { Schema, model } from 'mongoose'

const sessionSchema = new Schema ({
  sessionId: String,
  expiryDate: Date
})

sessionSchema.index({ expiryDate : 1, }, { expireAfterSeconds: 0 })
const Session = model('session', sessionSchema)

export default Session