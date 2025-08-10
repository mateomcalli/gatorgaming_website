import { Schema, model } from 'mongoose'

const memberSchema = new Schema ({
  name: String,
  position: String,
  hp: Number,
  picture: String,
  favoriteGames: String,
  aboutMe: String
})

const Member = model('member', memberSchema)

export default Member