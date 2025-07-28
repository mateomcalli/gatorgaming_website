import { Schema, model } from 'mongoose'

const memberSchema = new Schema ({
  name: String,
  position: String,
  hp: Number,
  picture: String, // should be a google cloud photo link
  favoriteGames: String,
  aboutMe: String
})

const Member = model('member', memberSchema)

export default Member