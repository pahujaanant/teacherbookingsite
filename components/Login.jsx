// I import all the functions from React that we need ( here it is useState )
// I import the CSS styles for this component
// and the third party libraries that I need ( axios to make HTTP requests and Cookies to get the token from the cookie )
import { useState } from 'react'
import styles from '../styles/App.module.css'
import Cookies from 'js-cookie'
import axios from 'axios'

// nextStep, prevStep and handleChange are passed as props from the parent component ( App.jsx )
const Login = ({ prevStep, nextStep, handleChange }) => {
  const initialState = { 
    username: '',
    password: ''
  }

  const [login, setLogin] = useState(initialState)
  const { username, password } = login
  
  const [error, setError] = useState("");

  // those functions are called when the user types in the input fields
  // they store the username and password values in the state
  // to track them and so they can be used and display them in the next steps/pages
  const handleLoginUsernameChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    handleChange('username')(e);
  }; 

  const handleLoginPasswordSubmit = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    handleChange('password')(e);
  };
  
  // this function is called when the user clicks on the button to submit the form
  // I make a POST request to the server to login the user
  // if the request is successful, I store the user in the state and I redirect the user to the next step
  // if the request is not successful, I display an error message
  const loginSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("/api/login", {
        username,
        password
      })
      Cookies.set("user", JSON.stringify(data));
      nextStep()
    } catch (error) {
      setError(error.response.data.message)
      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }

  // I disable the button if the username or the password are empty
  const isDisabled = username === '' || password === '';

  return (
    <div className={styles.signup__page}>
      <h1>Please log in</h1>
      <h2>Student must login with their <u>username</u> and <u>password</u> for their college account</h2>
      <form 
        className={styles.user__form} 
        onSubmit={loginSubmit}
      >
        <div className={styles.form__group}>
          <label>Username</label>
          <input
            className={styles.user__input}
            type="text"
            name="username"
            value={username}
            onChange={handleLoginUsernameChange}
          />
        </div>
        <div className={styles.form__group}>
          <label>Password</label>
          <input
            className={styles.user__input}
            type="password"
            name="password"
            value={password}
            onChange={handleLoginPasswordSubmit}
          />
        </div>
        <div className={styles.teachers__buttons}>
          <button className={styles.button} onClick={() => prevStep()}>Back</button>
          <button  
            className={isDisabled ? styles.disabled : styles.button} 
            disabled={isDisabled} 
            type="submit"
          >Login</button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  )
}

export default Login