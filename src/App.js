import React, { Component } from 'react';
import './App.scss';
import Brew from './containers/Brew/Brew';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  
  state = {
    fullscreen: false,
    boilMinutes: 60,
    startTime: 0,
    elapsedSeconds: 0,
    play: false,
    currentAdditionIndex: 0,
    doneThroughMinutes: 0,
    additions: {},
    newAddition: {
      name: null,
      type: null,
      amount: null,
      time: null
    },
    isAdditionControlOpen: false,
    isBoilControlOpen: false
  }

  // CLOCK TICK HANDLERS

  tick() {
    if(this.state.elapsedSeconds === this.state.boilMinutes*60) {
      clearInterval(this.interval);
    } else {
      this.setState(prevState => ({
        elapsedSeconds: prevState.elapsedSeconds + 1
      }));
    }
  }

  componentDidMount() {
    if(this.state.play) {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  }
  
  componentWillUnmount() {
      clearInterval(this.interval);
  }

  // OPTION BUTTON HANDLERS

  fullscreenButtonHandler = () => {
    if(this.state.fullscreen === false) {
      this.setState({
        fullscreen: true
      });
      document.body.requestFullscreen();
    }

    else {
      this.setState({
        fullscreen: false
      });
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      }
    }
      
  }

  restartButtonHandler = () => {
    // Get a copy of Additions from state
    const additionsCopy = {...this.state.additions};
    // For each of the 'time' indexes within additions...
    Object.keys(additionsCopy).forEach((additionTime) => {
      // For each addition within that 'time'...
      additionTime.forEach((addition) => {
        // Set this addition to "not done"
        addition.done = false;
      });
    });

    this.setState({
      currentAdditionIndex: 0,
      doneThroughMinutes: 0,
      elapsedSeconds: 0,
      additions: additionsCopy
    });
  }

  // INSTRUCTION BUTTON HANDLERS

  instructionDoneButtonHandler = () => {
    // Make sure we're not at the last addition...
    const additionsInOrder = Object.keys(this.state.additions).sort((a,b) => {return b-a});
    if(this.state.doneThroughMinutes < additionsInOrder[0]) {
      
    }

    if(this.state.currentAdditionIndex < Object.keys(this.state.additions).length) {
      // Get a copy of the current additions object in state
      let additionsCopy = {...this.state.additions};
      // Select the array of additions at the time matching the currentAdditionIndex
      // e.g. additionsCopy[30].forEach(...)
      additionsCopy[Object.keys(additionsCopy)[this.state.currentAdditionIndex]].forEach((addition) => {
        addition.done = true;
      });
      
      
      this.setState(prevState => ({
        // Set additions to the modified copy we made
        additions: additionsCopy,
        // Move the currentAdditionIndex up 1 -- used for the Instruction component
        currentAdditionIndex: prevState.currentAdditionIndex + 1
      }))
    } 
  }

  rewindButtonHandler = () => {
    if(this.state.currentAdditionIndex > 0) {
      // Get a copy of the current additions object in state
      let additionsCopy = {...this.state.additions};
      // Set the addition at index: currentAdditionIndex to DONE -- used in Addition component for strikethrough
      additionsCopy[Object.keys(additionsCopy)[this.state.currentAdditionIndex-1]].forEach((addition) => {
        addition.done = false;
      });

      this.setState(prevState => ({
        // Set additions to the modified copy we made
        additions: additionsCopy,
        currentAdditionIndex: prevState.currentAdditionIndex - 1
      }))
    }
  }

  startTimerHandler = () => {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState({
      play: true
    })
  }

  // RECIPE EDITOR HANDLERS
  boilMinutesMinusHandler = () => {
    let mins = this.state.boilMinutes;
    mins -= 10;

    this.setState({
      boilMinutes: mins
    });
  }

  boilMinutesPlusHandler = () => {
    let mins = this.state.boilMinutes;
    mins += 10;

    this.setState({
      boilMinutes: mins
    });
  }

  // additionDeleteHandler = (index) => {
  //   console.log('Addition index to delete: ' + index);
  //   let additionsCopy = [...this.state.additions];
  //   additionsCopy.splice(index);

  //   this.setState({
  //     additions: additionsCopy
  //   })
  // }

  openAdditionControlHandler = () => {
    this.setState({
      isAdditionControlOpen: true,
    })
  }

  closeAdditionControlHandler = () => {
    this.setState({
      isAdditionControlOpen: false,
      newAddition: {
        name: null,
        type: null,
        amount: null,
        time: null
      }
    })
  }

  newAdditionUpdateHandler = (newAddition) => {
    this.setState({
      newAddition: {
        name: newAddition.name,
        type: newAddition.type,
        amount: newAddition.amount,
        time: parseInt(newAddition.time),
      }
    });
  }

  addNewAdditionHandler = () => {

    this.closeAdditionControlHandler();

    const add = this.state.newAddition;
    let additionsCopy = {...this.state.additions};

    if(additionsCopy[add.time] !== undefined) {
      additionsCopy[add.time].push(add);
    } else {
      additionsCopy[add.time] = [];
      additionsCopy[add.time].push(add);
    }

    this.setState({
      additions: additionsCopy
    })
  }

  openBoilControlHandler = () => {
    this.setState({
      isBoilControlOpen: true
    });
  }

  closeBoilControlHandler = () => {
    this.setState({
      isBoilControlOpen: false
    });
  }

  render () {
    return (
      <BrowserRouter>
        <Route 
          exact path='/' 
          render={() => <Brew 
            // Options Related            
            fullscreen={this.state.fullscreen}
            play={this.state.play}

            optFullscreen={this.fullscreenButtonHandler}
            optRestart={this.restartButtonHandler}
            
            // Control-related
            additionCtrlOpen={this.state.isAdditionControlOpen}
            openAdditionControl={this.openAdditionControlHandler}
            closeAdditionControl={this.closeAdditionControlHandler}
            newAddition={this.state.newAddition}
            newAdditionUpdate={this.newAdditionUpdateHandler}
            addNewAddition={this.addNewAdditionHandler}
            
            boilCtrlOpen={this.state.isBoilControlOpen}
            openBoilControl={this.openBoilControlHandler}
            closeBoilControl={this.closeBoilControlHandler}
            boilMinus={this.boilMinutesMinusHandler}
            boilPlus={this.boilMinutesPlusHandler}

            // Boil-related
            boilMinutes={this.state.boilMinutes}
            startTime={this.state.startTime}
            elapsedSeconds={this.state.elapsedSeconds}
            currentAdditionIndex={this.state.currentAdditionIndex}
            additions={this.state.additions}
            
            // (Deprecated) Functions

            additionAdd={this.additionAddHandler}
            additionDelete={this.additionDeleteHandler}

            // Instruction-related
            instructDone={this.instructionDoneButtonHandler}
            instructRewind={this.rewindButtonHandler}
            timerStart={this.startTimerHandler}
          />}
        />

        
        </BrowserRouter>

    );  
  }
}

export default App;
