import React, { Component } from 'react';
import './App.scss';
import Brew from './containers/Brew/Brew';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  
  state = {
    showModal: false,
    fullscreen: false,
    boilMinutes: 60,
    startEpoch: null,
    elapsedSeconds: 0,
    instructionMinutesDone: null,
    play: false,
    currentAdditionIndex: 0,
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
    if(this.state.elapsedSeconds >= this.state.boilMinutes*60) {
      clearInterval(this.interval);
    } else if(this.state.play){
      const startEpoch = this.state.startEpoch;
      let currentEpoch = new Date() / 1000;
      currentEpoch = currentEpoch.toFixed(0);

      this.setState({
        elapsedSeconds: currentEpoch - startEpoch
      });
    }
  }

  componentDidMount() {
    let startEpoch = localStorage.getItem('startEpoch');

    // Check startEpoch as a test that there is data in localStorage at all
    if(startEpoch !== null) {
      // 'null' is starting value of startEpoch
      // If not null, then brew has been started
      if(startEpoch !== 'null') {
        // Get the stored boilMinutes
        const boilMinutes = localStorage.getItem('boilMinutes');
        // Get current epoch date in seconds
        let currentEpoch = new Date() / 1000;
        currentEpoch = currentEpoch.toFixed(0);

        //Check if this brew is in progress currently
        if((currentEpoch - startEpoch) < boilMinutes*60) {
          // If so, restore this brew to it's appropriate state
          // Bring up modal, set the affirmative and negative actions for this modal
          this.modalConfirm = this.modalCancel;
          this.modalHeader = "Brew In Progress";
          this.modalContent = "Returning you to a brew in progress. If you'd rather start over, tap the restart button in the upper right corner.";

          const additions = JSON.parse(localStorage.getItem('additions'));
          this.setState({
            showModal: true,
            additions: additions,
            startEpoch: +startEpoch,
            play: localStorage.getItem('play') === 'true',
            instructionMinutesDone: +localStorage.getItem('instructionMinutesDone'),
            boilMinutes: +boilMinutes,
            currentAdditionIndex: +localStorage.getItem('currentAdditionIndex')
          });
        } else {
          // Otherwise, clear the decks for a new brew
          localStorage.clear();
        }
      
      } else {
        console.log("Brew has not started but we're going to restore stuff anyway!");

        const additions = JSON.parse(localStorage.getItem('additions'));
        const boilMinutes = +localStorage.getItem('boilMinutes');

        this.setState({
          additions: additions,
          boilMinutes: boilMinutes
        });
      }
    }

    if(this.state.play || localStorage.getItem('play') === 'true') {
      this.interval = setInterval(() => this.tick(), 100);
    }
  }

  componentDidUpdate() {
    // Store all of state in localStorage
    Object.keys(this.state).map((key) => {
      return localStorage.setItem(key, JSON.stringify(this.state[key]));
    });
  }
  
  componentWillUnmount() {
      clearInterval(this.interval);
  }

  modalCancel = () => {
    this.setState({
      showModal: false
    });
  }

  // OPTION BUTTON HANDLERS

  fullscreenButtonHandler = () => {
    const currentFullscreen = this.state.fullscreen;
    if(currentFullscreen === false) {
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

    localStorage.setItem('fullscreen', !currentFullscreen);
  }

  restartButtonHandler = () => {

    // Bring up modal, set the affirmative and negative actions for this modal
    this.modalConfirm = this.restartConfirmHandler;
    this.modalHeader = "Restart Brew?";
    this.modalContent = "Restarting your brew will remove all ingredients and revert your timer to the beginning.";
    this.setState({showModal: true});
  }

  restartConfirmHandler = () => {
    localStorage.clear();

    //Set state back to initial state
    this.setState({
      showModal: false,
      fullscreen: false,
      boilMinutes: 60,
      startEpoch: null,
      elapsedSeconds: 0,
      play: false,
      instructionMinutesDone: null,
      currentAdditionIndex: 0,
      additions: {},
      newAddition: {
        name: null,
        type: null,
        amount: null,
        time: null
      },
      isAdditionControlOpen: false,
      isBoilControlOpen: false
    });
  }

  // INSTRUCTION BUTTON HANDLERS

  instructionDoneButtonHandler = () => {
    // Make sure we're not at the last addition...
    if(this.state.currentAdditionIndex < Object.keys(this.state.additions).length) {
      this.setState(prevState => ({
        // Move the currentAdditionIndex up 1 -- used for the Instruction component
        currentAdditionIndex: prevState.currentAdditionIndex + 1,
        instructionMinutesDone: +Object.keys(this.state.additions).reverse()[this.state.currentAdditionIndex]
      }))
    } 
  }

  rewindButtonHandler = () => {
    if(this.state.currentAdditionIndex > 0) {

      let doneMins;
      if(this.state.currentAdditionIndex === 1) {
        doneMins = null;
      } else {
        doneMins = +Object.keys(this.state.additions).reverse()[this.state.currentAdditionIndex-2];
      } 
      this.setState(prevState => ({
        currentAdditionIndex: prevState.currentAdditionIndex - 1,
        instructionMinutesDone: doneMins
      }))
    }
  }

  startTimerHandler = () => {
    // Get current epoch seconds
    const seconds = new Date() / 1000;
    console.log(seconds);
    this.interval = setInterval(() => this.tick(), 100);
    this.setState({
      startEpoch: +seconds.toFixed(0),
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
            showModal={this.state.showModal}
            modalConfirm={this.modalConfirm}
            modalCancel={this.modalCancel}
            modalHeader={this.modalHeader}
            modalContent={this.modalContent}

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
            elapsedSeconds={this.state.elapsedSeconds}
            currentAdditionIndex={this.state.currentAdditionIndex}
            instructionMinutesDone={this.state.instructionMinutesDone}
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
