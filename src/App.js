import React, { Component } from 'react';
import Timeline from './Timeline/Timeline';
import Instruction from './Instruction/Instruction';
import './App.css';

class App extends Component {
  state = {
    boilMinutes: 60,
    startTime: 0,
    elapsedSeconds: 0,
    play: true,
    additions: [
      // TIME (minutes), TYPE, AMOUNT, NAME, DONE
      [60, 'hops', '1oz', 'CENTENNIAL', false],
      [57, 'hops', '1oz', 'AMARILLO', false],
      [30, 'hops', '1oz', 'CENTENNIAL', false],
      [5, 'hops', '2oz', 'CENTENNIAL', false],
      [15, 'hops', '1oz', 'CITRA', false]
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

  render () {

    return (
      <div className='container'>
        <Timeline boilMinutes={this.state.boilMinutes} additions={this.state.additions} elapsedSeconds={this.state.elapsedSeconds}/>
        <Instruction boilMinutes={this.state.boilMinutes} additions={this.state.additions} elapsedSeconds={this.state.elapsedSeconds} />
      </div>
    );  
  }
}

export default App;
