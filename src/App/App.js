import React, { Component } from 'react';
import './App.css';
import Reservations from '../Components/Reservations';
import getReservations from './apicalls';
import Form from '../Components/Form';


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [ ]
    }
  }
  componentDidMount = () => {
    getReservations()
    .then(data => {
      this.setState({ reservations: data})
    })
    .catch(error => console.log(error))
  }
  
  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
