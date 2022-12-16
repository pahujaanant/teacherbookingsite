import { useState, useEffect } from 'react'
import styles from '../styles/App.module.css'
import axios from 'axios'

const ExistingAppointments = ({ prevStep, nextStep, handleChange, values}) => {
  const { username } = values;
  const [userdata, setUserData] = useState(null);

  // here I define the state for this component to see if a teacher has been selected or not
  const allAppointment = async() => {
    // e.preventDefault()
    let udata
    try {
      udata = await axios.get("/api/user", {
        params: {
          username: username
        },
      })

    } catch(error){
      console.log("Error allAppointment")
      
    }
    console.log(udata.data)
    setUserData(udata.data)
  }

  const comeBackToPreviousStep = e => {
    e.preventDefault();
    prevStep();
  }

//   const handleInput = e => {
//     setSelectedTeacher(e.target.value);             <- this function was not being used, its just here reference purposes
//     handleChange('teacher')(e);
//   }

const isDisable = userdata === null;

useEffect(() => {
  allAppointment();
}, []);

  return (
    <div className={styles.signup__page}>
      <h2>Existing Appointment</h2>

      {userdata ?  (
        <h3>"{userdata.username}" has an appointment with "{userdata.teacher}" on "{userdata.date}" at "{userdata.time}" to discuss the following: "{userdata.topic}"</h3>
      ) : (
        <h3></h3>
      ) }


      <button className={styles.button} onClick={comeBackToPreviousStep}>Go back</button>
    </div>
  )
}

export default ExistingAppointments