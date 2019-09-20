import React, { Component } from 'react';
import './App.scss';
import Brew from './containers/Brew/Brew';
import Recipe from './containers/Recipe/Recipe';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  
  state = {
    fullscreen: false,
    boilMinutes: 60,
    startTime: 0,
    elapsedSeconds: 0,
    play: false,
    currentAdditionIndex: 0,
    additions: [],
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
    console.log('Clicked fullscreen');
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
    const additionsCopy = [...this.state.additions];
    // Set the "done" property of each addition to false
    additionsCopy.forEach((element) => {
      element.done = false;
    });

    this.setState({
      currentAdditionIndex: 0,
      elapsedSeconds: 0,
      additions: additionsCopy
    });
  }

  // INSTRUCTION BUTTON HANDLERS

  instructionDoneButtonHandler = () => {
    if(this.state.currentAdditionIndex < this.state.additions.length) {
      // Get a copy of the current additions array in state
      let additionsCopy = [...this.state.additions];
      // Set the addition at index: currentAdditionIndex to DONE -- used in Addition component for strikethrough
      additionsCopy[this.state.currentAdditionIndex].done = true;
      
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
      // Get a copy of the current additions array in state
      let additionsCopy = [...this.state.additions];
      // Set the addition at index: currentAdditionIndex to DONE -- used in Addition component for strikethrough
      additionsCopy[this.state.currentAdditionIndex-1].done = false;

      this.setState(prevState => ({
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

  newAdditionUpdateHandler = (newAddition) => {
    this.setState({
      newAddition: {
        name: newAddition.name,
        type: newAddition.type,
        amount: newAddition.amount,
        time: parseInt(newAddition.time)
      }
    });

    console.log('new addition is: ' + this.state.newAddition);
  }

  additionDeleteHandler = (index) => {
    console.log('Addition index to delete: ' + index);
    let additionsCopy = [...this.state.additions];
    additionsCopy.splice(index);

    this.setState({
      additions: additionsCopy
    })
  }

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

  addNewAdditionHandler = () => {

    this.closeAdditionControlHandler();

    const add = this.state.newAddition;
    let additionsCopy = [...this.state.additions];

    additionsCopy.push(add);
    additionsCopy.sort(function(obj1, obj2) {
      return obj2.time - obj1.time;
    });

    this.setState({
      additions: additionsCopy
    })
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
            newAddition={this.state.newAddition}
            additionCtrlOpen={this.state.isAdditionControlOpen}
            boilCtrlOpen={this.state.isBoilControlOpen}
            newAdditionUpdate={this.newAdditionUpdateHandler}
            
            openAdditionControls={this.openAdditionControlHandler}
            closeAdditionControls={this.closeAdditionControlHandler}
            addNewAddition={this.addNewAdditionHandler}

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

        <Route
          path='/recipe'
          render={() => <Recipe
            boilMinutes={this.state.boilMinutes} 
            boilMinus={this.boilMinutesMinusHandler}
            boilPlus={this.boilMinutesPlusHandler}
            additionAdd={this.additionAddHandler}
            additionDelete={this.additionDeleteHandler}
            additions={this.state.additions}

          />}
        />
        </BrowserRouter>

    );  
  }
}

export default App;
