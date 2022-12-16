

import { useState } from 'react'
import styles from '../styles/App.module.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import ExistingAppointments from './ExistingAppointments'

const TeachersList = ({ prevStep, nextStep, existingAppointmentsStep, handleChange, values }) => {
  const { username } = values;

  // here I define the state for this component to see if a teacher has been selected or not
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [userdata, setUserData] = useState(null);

  // here I define an array of teachers that I will use to render the teachers list on the page
  const [teachersName, setTeachersName] = useState([
    { name: 'Dr. Akwafuo', id: 1 },
    { name: 'Dr. Choi', id: 2 },
    { name: 'Dr. Rong', id: 3 },
    { name: 'Dr. Bein', id: 4 },
  ]);

 /*  const updateTeacher = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put("/api/user", {
        username,
        teacher:selectedTeacher,
      })
      setError("")
      console.log("You have successfully updated teacher")
      //etSuccess("You have successfully updated teacher")
     
    } catch (error) {
      //setSuccess("")
      console.log("Error updating teacher")
      //setError(error.response.data.message)
    }
  }
*/

const updateTeacher = async () => {  
  try {
    const { data } = await axios.patch('/api/teacher/updateTeacher', {
      username,
      teacher: selectedTeacher
    }, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })
    continueToNextStep();
  } catch (error) {
    console.log(error);
  }
}


  const allAppointment = async(e) => {
    e.preventDefault()
    let usdata 
    try {
      usdata = await axios.get("/api/user", {
        params: {
          username: username
        },
      })

    } catch(error){
      console.log("Error allAppointment")
      //setError(error.response.data.message)
    }
    console.log(usdata.data)

  }

  const continueToNextStep = e => {
    e.preventDefault();
    updateTeacher(e);
    nextStep();
  }

  const comeBackToPreviousStep = e => {
    e.preventDefault();
    prevStep();
  }

  const gotoexistingAppointmentsStep = e => {
    e.preventDefault();
    existingAppointmentsStep();
  }

  const handleInput = e => {
    setSelectedTeacher(e.target.value);
    handleChange('teacher')(e);
  }

  const isDisabled = selectedTeacher === null;

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
        <h1>Teachers List</h1>
        <h2>Please select from one of the following teachers</h2>
        <div className={styles.teachers__list}>
          {teachersName.map(teacher => (
            <div className={styles.teachers__group} key={teacher.id}>
              <label className={styles.label}>{teacher.name}</label>
              <input
                className={styles.teacher__input}
                type="radio"
                name="teacher"
                value={teacher.name}
                onClick={handleInput} 
                />
            </div>
          ))}
        </div> 
        <div className={styles.teachers__buttons}>
          <button className={styles.button} onClick={comeBackToPreviousStep}>Back</button>
          {selectedTeacher ? (
            <button className={styles.button} onClick={continueToNextStep}>Next</button>
            ) : (
              <button className={isDisabled ? styles.disabled : styles.button} >Next</button>
              )}
        </div>
      </div>
    </div>
  )
}

export default TeachersList