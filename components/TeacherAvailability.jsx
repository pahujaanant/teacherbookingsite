import styles from '../styles/App.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from 'react'
import axios from 'axios'

const TeacherAvailability = ({ prevStep, nextStep, handleChange, values }) => {
  const { teacher, username } = values;




  // here I define the state for this component to see if a date has been selected or not
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const continueToNextStep = e => {
    e.preventDefault();
    updateDateAndTime(e);
    nextStep();
  }

  const comeBackToPreviousStep = e => {
    e.preventDefault();
    prevStep();
  }

  // here I define the options of the day for the dropdown menu
  const dayOptions = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  ];

  // here I define the options of the time for the dropdown menu
  const timeOptions = [
    '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'
  ];



  /*const updateTeacherAvailability = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("/api/user", {
        username,
        date:selectedDate,                                           <--- this function was not written properly thats why its commented out
      })
      setError("")
      console.log("You have successfully updated teacher")
      //etSuccess("You have successfully updated teacher")
     
    } catch (error) {
      //setSuccess("")
      console.log("Error updating teacher")
      //setError(error.response.data.message)
    }
  }*/

  
  const handleDateInput = e => {
    setSelectedDate(e.value);
    console.log(e.value)
    handleChange('date')(e);
  }

  const handleTimeInput = e => {
    setSelectedTime(e.value);
    handleChange('time')(e);
  }


  const updateDateAndTime = async (e) => { 
    e.preventDefault(); 
    try {
      const { data } = await axios.post('/api/dateandtime', {
        username,
        date: selectedDate || defaultDayOption,
        time: selectedTime || defaultTimeOption
       })
      //continueToNextStep();
    } catch (error) {
      console.log(error);
    }
  }


  // here I define the default value of the day and time for the dropdown menu that I want to display which here is Monday and 10am
  // ( dayOptions[0] and timeOptions[0] mean the first element of the dayOptions and timeOptions arrays )
  const defaultDayOption = dayOptions[0];
  const defaultTimeOption = timeOptions[0];

  return (
    <div style={{ position: 'relative'}}>
      <span
        style={{
          position: 'absolute',
          right: '10px',
          top: '-30px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: 'lightsteelblue',
        }}
      >Hello, {username}</span>
      <div className={styles.teachers__page}>
        <h1>Choose a Date and Time</h1>
        <h2>Please select Time and Day for {teacher}</h2>
        <div className={styles.dropdown__upperdiv}>
          

        <Dropdown 
            options={dayOptions} 
            onChange={handleDateInput}
            value={defaultDayOption}
            className={styles.dropdown}
            controlClassName={styles.dropdown__control}
          />
          <Dropdown 
            options={timeOptions} 
            onChange={handleTimeInput}
            value={defaultTimeOption}
            className={styles.dropdown}
            controlClassName={styles.dropdown__control}
          />


        </div>

        <div className={styles.teachers__buttons}>
          <button className={styles.button} onClick={comeBackToPreviousStep}>Back</button> 
      
          <button className={styles.button} onClick={continueToNextStep}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default TeacherAvailability