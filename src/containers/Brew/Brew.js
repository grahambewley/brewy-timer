import React, { Component } from 'react';
import Options from '../../components/Options/Options';
import CurrentTime from '../../components/CurrentTime/CurrentTime';
import Timeline from '../../components/Timeline/Timeline';
import Instruction from '../../components/Instruction/Instruction';
import './Brew.css';

class Brew extends Component {

  
    
    render() {
        return (
            <div className='container'>
                <Options 
                    fullscreenClick={this.props.optFullscreen} 
                    restartClick={this.props.optRestart}
                    menuClick={this.menuButtonHandler} 
                    full={this.props.fullscreen} />
                <CurrentTime 
                    elapsedSeconds={this.props.elapsedSeconds}
                    totalSeconds={this.props.boilMinutes*60} />
                <Timeline 
                    boilMinutes={this.props.boilMinutes} 
                    additions={this.props.additions} 
                    elapsedSeconds={this.props.elapsedSeconds} />
                <Instruction 
                    done={this.props.instructDone} 
                    rewind={this.props.instructRewind} 
                    currentAdditionIndex={this.props.currentAdditionIndex} 
                    boilMinutes={this.props.boilMinutes} 
                    additions={this.props.additions} 
                    elapsedSeconds={this.props.elapsedSeconds} />
             </div>
        );
    };
}

export default Brew;