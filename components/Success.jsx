// ORDER : this is the fifth and final step
// I import the styles for this component

import styles from '../styles/App.module.css'

// here I define the component and pass the props ( values, firstStep ) as parameters to use them in the component

const Success = ({ values, firstStep }) => {
// values holds all the previously stored states and is passed as a parameter to this page, and the only other parameter I need is 
 // the first step, which is going to be used
  // here I take the teacher, date and time that have been updated and stored in the previous steps ( previously, when the user has selected a teacher and a date and time )

  const { username, teacher, date, time, topic } = values

  const comeBackToPreviousStep = e => {
    e.preventDefault();
    firstStep();
  }
// here this step will only let you go back to the first step, after button is clicked for this event
  return (
    <div className={styles.signup__page}>
      <h1>Success !</h1>
      <h2>{username}, your appointment has been set with {teacher} for {time} on {date}!</h2>
      <h3>Topic : {topic}</h3>
      <button className={styles.button} onClick={comeBackToPreviousStep}>Go back to the first page</button>
    </div>

  
  )
}

export default Success