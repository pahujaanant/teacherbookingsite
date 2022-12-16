// I import all the functions from React that I need ( here it is useState )
// I import the styles for this component
// and the third party libraries that I need ( axios to make HTTP requests from the client side ) 
import { useState } from 'react'
import styles from '../styles/App.module.css'
import axios from 'axios'

// nextStep is passed as props from the parent component ( App.jsx )
const Signup = ({ nextStep }) => {
  const initialState = { 
    username: '',
    password: '',
  }

  const [user, setUser] = useState(initialState)
  const { username, password, teacher, date, time, topic } = user

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // this function is called when the user clicks on the button to submit the form
  // I make a POST request to the server to create a new user
  // if the request is successful, I store the user in the state and I redirect the user to the next step
  // if the request is not successful, I display an error message
  const registerSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("/api/signup", {
        username,
        password,
        teacher,
        date,
        time,
        topic
      })
      setError("")
      setSuccess("You have successfully registered, you'll be redirected to the login page")
      setTimeout(() => {
        setSuccess("")
        nextStep()
      }, 1500)
    } catch (error) {
      setSuccess("")
      setError(error.response.data.message)
      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }

  // I disable the button if the username or the password are empty
  const isDisabled = username === '' || password === ''

  return (
    <div className={styles.signup__page}>
      <h1>Welcome to CSUF Computer Science Appointment Booking</h1>
      <h2>Please login or create an account with a <u>username</u> and <u>password</u></h2>
      <form 
        className={styles.user__form} 
        onSubmit={registerSubmit}
      >
        <div className={styles.form__group}>
          <label>Username</label>
          <input
            className={styles.user__input}
            type="text"
            name="username"
            value={username}
            onChange={handleRegisterChange}
          />
        </div>
        <div className={styles.form__group}>
          <label>Password</label>
          <input
            className={styles.user__input}
            type="password"
            name="password"
            value={password}
            onChange={handleRegisterChange}
          />
        </div>

        <div className={styles.teachers__buttons}>
          <button  
            className={styles.button} 
            onClick={() => nextStep()}
          >Go to the login page</button>
          <button 
            className={isDisabled ? styles.disabled : styles.button} 
            disabled={isDisabled} 
            type="submit"
          >
            Sign Up
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </div>
  )
}

export default Signup