import React, { Component } from 'react';
import Timeline from './Timeline/Timeline';
import Adder from './Adder/Adder';
import './App.css';

class App extends Component {
  state = {
    boilTime: 60,
    startTime: '',
    elapsedSeconds: 0,
    additions: [
      [60, 'hops', '1oz', 'CENTENNIAL'],
      [30, 'hops', '1oz', 'CENTENNIAL'],
      [5, 'hops', '2oz', 'CENTENNIAL'],
      [15, 'hops', '1oz', 'CITRA']
    ]
  }

  tick() {
    this.setState(prevState => ({
      elapsedSeconds: prevState.elapsedSeconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  addToAdditions() {
    alert("Hey there");
  }

  startTimer = () =>{
    const d = new Date().getTime / 1000;
    console.log('Start time is ' + d);
    this.setState({
      startTime: d
    })
  }

  render () {

    return (
      <div className='container'>
        <Timeline boilTime={this.state.boilTime} additions={this.state.additions} elapsedSeconds={this.state.elapsedSeconds}/>
        <Adder submitFunction={this.addToAdditions}/>
        <button onClick={this.startTimer}>Start</button>
      </div>
    );
  }
}

export default App;
