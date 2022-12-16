// here I import the function to connect to the database
// and then I also import the model of the user 
import connectDB from '../../../utils/connectDB'
import User from '../../../models/user'

// here I connect to the database
connectDB()

// here I export the function updateTopic and I also export the method PATCH
// because I want to PATCH the user's info that I already have in the database ( username and password )

export default async (req, res) => {
  switch (req.method) {
    case 'PATCH':
      await updateTopic(req, res)
      break
  }
}

// update the teacher in the database in the collection of users
const updateTopic = async (req, res) => {
  try {
    const { username, topic } = req.body

    await User.findOneAndUpdate({ username }, { topic })
    res.json({
      msg: 'Topic updated successfully'
    })
  } catch (err) { 
    return res.status(500).json({ err: err.message })
  }
}