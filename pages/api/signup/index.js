// here I import the function to connect to the database
// and then I also import the model of the user 

import connectDB from '../../../utils/connectDB'
import User from '../../../models/user'

// here I connect to the database
connectDB()

// here I export the function signup and I also export the method POST
// because I want to POST the user's info that I already have in the database ( username and password )

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await signup(req, res)
      break
  }
}

// fist I create the function signup where I destruct the req.body and we get the username, password, teacher, date, time and topic
// then I check if the username already exists in the database
// then I create a new user with the username, password, teacher, date, time and topic and save it in the database with the .save() method
// then I send the user back to the client

const signup = async (req, res) => {
  try {
    const { username, teacher, date, time, topic, password } = req.body

    const check = await User.findOne({ username }) // findOne is a mongoose function that tries to find a document based on condition
    if (check) {
      return res.status(400).json({
        message: "Username is already taken, try another one.",
      });
    }

    const user = await new User({
      username,
      teacher,
      date,
      time,
      topic,
      password,
    }).save()


    res.send(user)
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}