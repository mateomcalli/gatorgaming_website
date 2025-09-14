import { Schema, model } from 'mongoose'

const lanInfoSchema = new Schema({
  semester: String,
  year: String,
  dateRange: String
})

const LanInfo = model('LanText', lanInfoSchema)

export default LanInfo