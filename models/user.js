import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    topic: {
      type: String,
    },
  },
)

let Dataset = mongoose.models.User || mongoose.model('User', userSchema)
export default Dataset
