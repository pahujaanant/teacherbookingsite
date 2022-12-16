// ORDER : this is the main page that renders all 6 components ( or steps ) in the right order
import { Component } from 'react'

//** */ here I imported all the components that we need for the website
import Login from './Login';
import TeacherAvailability from './TeacherAvailability';
import TeachersList from './TeachersList'
import DiscussionTopic from './DiscussionTopic'
import Success from './Success'
import Signup from './Signup';
import MakeView from './MakeView'
import ExistingAppointments from './ExistingAppointments'

export default class App extends Component {
  // define the default state of all the components
  state = {
    step: 1,
    username: '',
    password: '',
    teacher: '',
    date: '',
    time: '',
    topic: ''
  }

  // go back to the first page when the user is on the last page (success page)
  firstStep = () => {
    this.setState({
      step: 1
    });
  }

  viewStep = () =>{
    this.setState({
      step: 3
    })
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }


  teacherListStep = () =>{
    this.setState({
      step: 4
    })
  }

  existingAppointmentsStep = () =>{
    this.setState({
      step: 5
    })
  }

  teacherAvailabilityStep = () =>{
    this.setState({
      step: 6
    })
  }




  // this function is used to update the state's values ( teacher, date, time, topic ) when the user types or select something in those inputs
  handleChange = input => e => {
    if(input === 'date' || input === 'time') {
      this.setState({ [input]: e.value });
    } else {
      this.setState({ [input]: e.target.value });
    }
  }

  render() 
  {
    // here I destructure the states ( which means I put the infos between brackets ), so I can use it in the JSX/HTML code of all the components ( children ) below
    const { step } = this.state;
    const { username, password, teacher, date, time, topic } = this.state;
    const values = { username, password, teacher, date, time, topic };

    // here I use a switch statement to render the components in the right order
    switch (step) {
      case 1:
        return (
          // I pass only the values and the functions as props to the components that I need them in
          <Signup
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          // I pass only the values and the functions as props to the components that I need them in
          <Login
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
        
        case 3:
          return (

              <MakeView
               prevStep= {this.prevStep}
               nextStep= {this.nextStep}
               existingAppointmentsStep = {this.existingAppointmentsStep}
               handleChange= {this.handleChange}
               values= {values}
               />
          )

      case 4: 
        return (
          // I pass only the values and the functions as props to the components that I need them in
          <TeachersList 
            
          nextStep={this.teacherAvailabilityStep}
          prevStep={this.prevStep}
          existingAppointmentsStep = {this.existingAppointmentsStep}
          handleChange={this.handleChange}
          values={values}
          />
        )


        case 5: 
        return (
          // I pass only the values and the functions as props to the components that I need them in
          <ExistingAppointments 
            nextStep={this.nextStep}
            prevStep={this.teacherListStep}
           // existingAppointmentsStep = {this.existingAppointmentsStep}
            handleChange={this.handleChange}
            values={values}
          />
        ) 


        case 6: 
        return (
          // I pass only the values and the functions as props to the components that I need them in
          <TeacherAvailability
            nextStep={this.nextStep}
            prevStep={this.teacherListStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 7:
        return (
          // I pass only the values and the functions as props to the components that I need them in
          <DiscussionTopic
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        )
      case 8:
        return (
          // I pass only the values and the functions as props to the components that I need them in
          <Success
            values={values}
            firstStep={this.firstStep}
          />
        )
      default: 
        // do nothing
    }
  }
}
//