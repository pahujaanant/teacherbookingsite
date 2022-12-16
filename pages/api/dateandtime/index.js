import connectDB from '../../../utils/connectDB'
import User from '../../../models/user'

// here I connect to the database
connectDB()

// here I export the function updateDateTime and I also export the method PATCH
// because I want to PATCH the user's info that I already have in the database ( username and password )

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await updateDateTime(req, res)
      break
  }
}

// update the teacher in the database in the collection of users
const updateDateTime = async (req, res) => {
  try {
    const { username, date, time } = req.body
    console.log({username}, {date}, {time})
    await User.findOneAndUpdate({ username }, { date, time })
    res.json({
      msg: 'Date and time updated successfully'
    })
  } catch (err) { 
    return res.status(500).json({ err: err.message })
  }
}








