import React, { Component } from 'react';
import Options from './Options/Options';
import Timeline from './Timeline/Timeline';
import Instruction from './Instruction/Instruction';
import './App.css';

class App extends Component {
  state = {
    boilMinutes: 60,
    startTime: 0,
    elapsedSeconds: 0,
    play: true,
    currentAdditionIndex: 0,
    additions: [
      // TIME (minutes), TYPE, AMOUNT, NAME, DONE
      [60, 'hops', '1oz', 'Centennial', false],
      [57, 'hops', '1oz', 'Amarillo', false],
      [30, 'hops', '1oz', 'Centennial', false],
      [15, 'hops', '1oz', 'Citra', false],
      [5, 'hops', '2oz', 'Centennial', false]      
    ]
  }

  tick() {
    this.setState(prevState => ({
      elapsedSeconds: prevState.elapsedSeconds + 1
    }));
  }

  componentDidMount() {
    if(this.state.play) {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  instructionDoneButtonHandler = () => {
    this.setState(prevState => ({
      currentAdditionIndex: prevState.currentAdditionIndex + 1
    }))
  }

  render () {

    return (
      <div className='container'>
        <Options />
        <Timeline boilMinutes={this.state.boilMinutes} additions={this.state.additions} elapsedSeconds={this.state.elapsedSeconds}/>
        <Instruction done={this.instructionDoneButtonHandler} currentAdditionIndex={this.state.currentAdditionIndex} boilMinutes={this.state.boilMinutes} additions={this.state.additions} elapsedSeconds={this.state.elapsedSeconds} />
      </div>
    );  
  }
}

export default App;
