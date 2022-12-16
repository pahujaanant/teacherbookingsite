// here I import the function to connect to the database
// and then I also import the model of the user 

import connectDB from '../../../utils/connectDB'
import User from '../../../models/user'

// here I connect to the database
connectDB()

// here I export the function getUsers and I also export the method GET
// because I want to GET the user's info that I already have in the database ( username and password )

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await login(req, res)
      break
  }
}

// here I create the function login where I use the method find() to find all the users in the database via the model User
// and then return the users in json format 
// if for some reason there is an error, then I return the error in json format 
// it's convention to return the error in json format

export const login = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message:
          "The username you entered is not connected to any account.",
      });
    }
    res.send({
      user: {
        id: user._id,
        username: user.username,
        password: user.password,
        teacher: user.teacher,
        date: user.date,
        time: user.time,
        topic: user.topic,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





