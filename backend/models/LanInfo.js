import { Schema, model } from "mongoose"

const lanInfoSchema = new Schema({
  edition: String,
  dateRange: String
})

const LanInfo = model('LanText', lanInfoSchema)

export default LanInfo