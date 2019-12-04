import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/actions';
import './App.scss';
import Brew from './containers/Brew/Brew';
import PostBrew from './containers/PostBrew/PostBrew';
class App extends Component {
  
  state = {
    showModal: false,
    fullscreen: false,
    startEpoch: null,                 // REDUX
    elapsedSeconds: 0,                // REDUX
    instructionMinutesDone: null,     // REDUX
    play: false,                      // REDUX
    currentAdditionIndex: 0,          // REDUX
    isNewAdditionControlOpen: false,
    isBoilControlOpen: false,
    isEditAdditionControlOpen: false
  }

  // CLOCK TICK HANDLERS

  tick() {
    if(this.state.elapsedSeconds >= this.props.boilMins*60) {
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
      
      // Get the stored boilMinutes
      const boilMinutes = localStorage.getItem('boilMinutes');

      if(startEpoch !== 'null') {
        // Get current epoch date in seconds
        let currentEpoch = new Date() / 1000;
        currentEpoch = currentEpoch.toFixed(0);

        //Check if this brew is in progress currently
        if((currentEpoch - startEpoch) < boilMinutes*60) {
          // If so, restore this brew to it's appropriate state
          // Bring up modal, set the affirmative and negative actions for this modal
          this.modalConfirm = this.modalDismiss;
          this.modalCancel = this.restartButtonHandler;
          this.modalConfirmButtonText = "OK";
          this.modalCancelButtonText = "Restart";
          this.modalHeader = "Brew In Progress";
          this.modalContent = "Returning you to a brew in progress. Tap OK to continue or Restart to begin a new brew.";

          const additions = JSON.parse(localStorage.getItem('additions'));
          this.props.onRestoreFromStorage(additions, boilMinutes);
          
          this.setState({
            showModal: true,
            startEpoch: +startEpoch,
            play: localStorage.getItem('play') === 'true',
            instructionMinutesDone: +localStorage.getItem('instructionMinutesDone'),
            currentAdditionIndex: +localStorage.getItem('currentAdditionIndex')
          });
        } else {
          // Otherwise, clear the decks for a new brew
          localStorage.clear();
        }
      
      } else {
        console.log("Brew has not started but we're going to restore stuff anyway!");

        const additions = JSON.parse(localStorage.getItem('additions'));
        this.props.onRestoreFromStorage(additions, boilMinutes);
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

    localStorage.setItem('additions', JSON.stringify(this.props.adds));
    localStorage.setItem('boilMinutes', JSON.stringify(this.props.boilMins));
  }
  
  componentWillUnmount() {
      clearInterval(this.interval);
  }

  modalDismiss = () => {
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
    this.modalCancel = this.modalDismiss;
    this.modalConfirmButtonText = "OK";
    this.modalCancelButtonText = "Cancel";
    this.modalHeader = "Restart Brew?";
    this.modalContent = "Are you sure? Restarting your brew will remove all ingredients and revert your timer to the beginning.";
    this.setState({showModal: true});
  }

  restartConfirmHandler = () => {
    localStorage.clear();

    // Clear Redux store
    this.props.onRestart();
    
    //Set state back to initial state
    this.setState({
      showModal: false,
      fullscreen: false,
      startEpoch: null,
      elapsedSeconds: 0,
      play: false,
      instructionMinutesDone: null,
      currentAdditionIndex: 0,
      isNewAdditionControlOpen: false,
      isBoilControlOpen: false,
      isEditAdditionControlOpen: false
    });
  }

  // INSTRUCTION BUTTON HANDLERS

  instructionDoneButtonHandler = () => {
    // Make sure we're not at the last addition...
    if(this.state.currentAdditionIndex < Object.keys(this.props.adds).length) {
      this.setState(prevState => ({
        // Move the currentAdditionIndex up 1 -- used for the Instruction component
        currentAdditionIndex: prevState.currentAdditionIndex + 1,
        instructionMinutesDone: +Object.keys(this.props.adds).reverse()[this.state.currentAdditionIndex]
      }))
    } 
  }

  rewindButtonHandler = () => {
    if(this.state.currentAdditionIndex > 0) {

      let doneMins;
      if(this.state.currentAdditionIndex === 1) {
        doneMins = null;
      } else {
        doneMins = +Object.keys(this.props.adds).reverse()[this.state.currentAdditionIndex-2];
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
    this.interval = setInterval(() => this.tick(), 100);
    this.setState({
      startEpoch: +seconds.toFixed(0),
      play: true
    })
  }

  // RECIPE EDITOR HANDLERS

  openNewAdditionControlHandler = () => {
    this.setState({isNewAdditionControlOpen: true});
  }

  closeAdditionControlHandler = () => {
    this.props.onClearNewAddition();
    this.setState({isNewAdditionControlOpen: false});
  }

  addNewAdditionHandler = () => {
    this.props.onAddNewAddition();
    this.setState({isNewAdditionControlOpen: false});
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

  additionTapHandler = (additionTime) => {
    // Bring up modal, set the affirmative and negative actions for this modal
    this.modalConfirm = () => this.deleteAddition(additionTime);
    this.modalCancel = this.modalDismiss;
    this.modalConfirmButtonText = "Delete";
    this.modalCancelButtonText = "Cancel";
    this.modalHeader = "Delete?";
    this.modalContent = "Are you sure you want to delete this addition?";
    this.setState({showModal: true});
  }

  deleteAddition = (additionTime) => {
    this.props.onDeleteAddition(additionTime);
    this.setState({showModal: false});
  }


  render () {
    return (
      <Switch>
        <Route 
          exact path='/' 
          render={() => <Brew 
            showModal={this.state.showModal}
            modalConfirm={this.modalConfirm}
            modalConfirmButtonText={this.modalConfirmButtonText}
            modalCancelButtonText={this.modalCancelButtonText}
            modalCancel={this.modalCancel}
            modalHeader={this.modalHeader}
            modalContent={this.modalContent}

            // Options Related            
            fullscreen={this.state.fullscreen}
            play={this.state.play}

            optFullscreen={this.fullscreenButtonHandler}
            optRestart={this.restartButtonHandler}
            
            // Control-related
            additionCtrlOpen={this.state.isNewAdditionControlOpen}
            openNewAdditionControl={this.openNewAdditionControlHandler}
            closeAdditionControl={this.closeAdditionControlHandler}
            addNewAddition={this.addNewAdditionHandler}
            additionTap={this.additionTapHandler}

            boilCtrlOpen={this.state.isBoilControlOpen}
            openBoilControl={this.openBoilControlHandler}
            closeBoilControl={this.closeBoilControlHandler}

            // Boil-related
            elapsedSeconds={this.state.elapsedSeconds}
            currentAdditionIndex={this.state.currentAdditionIndex}
            instructionMinutesDone={this.state.instructionMinutesDone}

            // Instruction-related
            instructDone={this.instructionDoneButtonHandler}
            instructRewind={this.rewindButtonHandler}
            timerStart={this.startTimerHandler}
          />}
        /> 
        <Route path='/postbrew' component={PostBrew}/> 
      </Switch>

    );  
  }
}

const mapStateToProps = state => {
  return {
    adds: state.brew.additions,
    boilMins: state.brew.boilMinutes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddNewAddition: () => dispatch(actionCreators.addNewAddition()),
    onDeleteAddition: (additionTime) => dispatch(actionCreators.deleteAddition(additionTime)),
    onRestart: () => dispatch(actionCreators.restartBrew()),
    onRestoreFromStorage: (additions, boilMinutes) => dispatch(actionCreators.restoreFromStorage(additions, boilMinutes)),
    onClearNewAddition: () => dispatch(actionCreators.clearNewAddition())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
