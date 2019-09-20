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
    isControlSliderOpen: false
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

  additionAddHandler = (newAddition) => {
    const additionToAdd = {
      time: parseInt(newAddition.time),
      type: newAddition.type,
      amount: newAddition.amount,
      name: newAddition.name,
      done: false
    }
    console.log('submitted addition');
    console.log(additionToAdd);

    let additionsCopy = [...this.state.additions];

    additionsCopy.push(additionToAdd);
    additionsCopy.sort(function(obj1, obj2) {
      return obj2.time - obj1.time;
    });

    this.setState({
      additions: additionsCopy
    })
  }

  additionDeleteHandler = (index) => {
    console.log('Addition index to delete: ' + index);
    let additionsCopy = [...this.state.additions];
    additionsCopy.splice(index);

    this.setState({
      additions: additionsCopy
    })
  }

  openControlsHandler = () => {
    console.log('opening controls');
    this.setState({
      isControlSliderOpen: true
    })
  }

  closeControlsHandler = () => {
    console.log('closing controls');
    this.setState({
      isControlSliderOpen: false
    })
  }

  render () {
    return (
      <BrowserRouter>
        <Route 
          exact path='/' 
          component={() => <Brew 
            fullscreen={this.state.fullscreen}
            play={this.state.play}
            boilMinutes={this.state.boilMinutes}
            startTime={this.state.startTime}
            elapsedSeconds={this.state.elapsedSeconds}
            currentAdditionIndex={this.state.currentAdditionIndex}
            additions={this.state.additions}
            ctrlOpen={this.state.isControlSliderOpen}

            openControls={this.openControlsHandler}
            closeControls={this.closeControlsHandler}
            instructDone={this.instructionDoneButtonHandler}
            instructRewind={this.rewindButtonHandler}
            optFullscreen={this.fullscreenButtonHandler}
            optRestart={this.restartButtonHandler}
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
