import React, { Component } from 'react';
import Options from './Options/Options';
import CurrentTime from './CurrentTime/CurrentTime';
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
      {
        time: 60,
        type: 'hops',
        amount: '1 oz',
        name: 'Centennial',
        done: false
      },
      {
        time: 57,
        type: 'hops',
        amount: '1 oz',
        name: 'Amarillo',
        done: false
      },
      {
        time: 30,
        type: 'hops',
        amount: '1 oz',
        name: 'Centennial',
        done: false
      },
      {
        time: 20,
        type: 'malt',
        amount: '3 lbs',
        name: 'Maris Otter LME',
        done: false
      },
      {
        time: 15,
        type: 'hops',
        amount: '1 oz',
        name: 'Citra',
        done: false
      },
      {
        time: 5,
        type: 'hops',
        amount: '2 oz',
        name: 'Centennial',
        done: false
      }
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

  fullscreenButtonHandler = () => {
    document.body.requestFullscreen();
  }
  
  instructionDoneButtonHandler = () => {
    if(this.state.currentAdditionIndex < this.state.additions.length) {
      this.setState(prevState => ({
        currentAdditionIndex: prevState.currentAdditionIndex + 1
        
      }))
    }
    
  }

  rewindButtonHandler = () => {
    if(this.state.currentAdditionIndex > 0)
    {
      this.setState(prevState => ({
        currentAdditionIndex: prevState.currentAdditionIndex - 1
      }))
    }
  }

  render () {
    return (
      <div className='container'>
        <Options 
          full={this.fullscreenButtonHandler} />
        <CurrentTime 
          elapsedSeconds={this.state.elapsedSeconds}
          totalSeconds={this.state.boilMinutes*60}/>
        <Timeline 
          boilMinutes={this.state.boilMinutes} 
          additions={this.state.additions} 
          elapsedSeconds={this.state.elapsedSeconds} />
        <Instruction 
          done={this.instructionDoneButtonHandler} 
          rewind={this.rewindButtonHandler} 
          currentAdditionIndex={this.state.currentAdditionIndex} 
          boilMinutes={this.state.boilMinutes} 
          additions={this.state.additions} 
          elapsedSeconds={this.state.elapsedSeconds} />
      </div>
    );  
  }
}

export default App;
