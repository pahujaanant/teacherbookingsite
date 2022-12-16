import connectDB from '../../../utils/connectDB'
import User from '../../../models/user'

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getUser(req, res)
      break
  }
}

const getUser = async (req, res) => {
  try {
    const { username } = req.query
    const user = await User.findOne({username})
    if (!user) return res.status(400).json({ err: 'User does not exist.' })

    res.json(
      user
    )
  } catch (err) { 
    return res.status(500).json({ err: err.message })
  }
}