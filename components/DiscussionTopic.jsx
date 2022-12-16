// this is the fourth step
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react'
import styles from '../styles/App.module.css'

const DiscussionTopic = ({ prevStep, nextStep, handleChange, values }) => {
  const { username } = values;
  const [text, setText] = useState('');

  const continueToNextStep = e => {
    e.preventDefault();
    updateTopic(e);
    nextStep();
  }

  const comeBackToPreviousStep = e => {
    e.preventDefault();
    prevStep();
  }

  const handleInput = e => {
    setText(e.target.value);
    handleChange('topic')(e);
  }
  
  const isDisabled = text.length === 0; // this is the default state of the discussion box, where nothing has been entered yet


  const updateTopic = async () => {  
    try {
      const { data } = await axios.patch('/api/topic/updateTopic', {
        username,
        topic: text
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
        <h1>Discussion Topic</h1>
        <h2>Please fill out information that you would like to discuss in your meeting</h2>
        <textarea
          rows={10}
          className={styles.textarea} placeholder="Write here..." 
          required
          value={text}
          onChange={handleInput}
        />
        <div className={styles.teachers__buttons}>
          <button className={styles.button} onClick={comeBackToPreviousStep}>Back</button>
          <button 
            className={isDisabled ? styles.disabled : styles.button} 
            onClick={continueToNextStep}
          >Next</button>
        </div>
      </div>
    </div>
  )
}

export default DiscussionTopic