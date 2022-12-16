// this page comes right after logging in, and it shows two options, one for making appointment and one for viewing existing appointment

import { useState } from 'react'
import styles from '../styles/App.module.css'


const MakeView = ({ prevStep, nextStep, existingAppointmentsStep, handleChange, values }) => {
    const { username } = values;
 
const comeBackToPreviousStep = e => {
        e.preventDefault();
        prevStep();
      }


 const continueToNextStep = e => {
        e.preventDefault();
        nextStep();
      }
    
      const goToExistingApptStep = e => {
        e.preventDefault();
        existingAppointmentsStep();
      }
  


return (
// button for make appointment and delete appointment are here 

<div style={{ position: 'relative'}}>
 <span
        style={{
          position: 'absolute',
          right: '30px',
          top: '-20px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: 'lightsteelblue',
        }}
      >Hello, {username}</span>

<h2>
What would you like to do?
</h2>
<div>
<button className = {styles.button} onClick={() => nextStep()}> Make an Appointment</button> 
</div>

<button className = {styles.button}onClick={goToExistingApptStep}>View Existing Appointment</button> 

<div>
</div>
<div className={styles.teachers__buttons}>
          <button className={styles.button} onClick={() => prevStep()}>Back</button>
</div>

</div>

      )

 }

    export default MakeView