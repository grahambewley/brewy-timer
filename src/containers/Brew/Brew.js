import React, { Component } from 'react';
import Options from '../../components/Options/Options';
import CurrentTime from '../../components/CurrentTime/CurrentTime';
import Timeline from '../../components/Timeline/Timeline';
import Instruction from '../../components/Instruction/Instruction';
import './Brew.css';

class Brew extends Component {

    testFunction = () => {
        console.log('TESTING FUNCTION THING!');
    }
    
    render() {
        return (
            <div className='container'>
                <CurrentTime 
                    elapsedSeconds={this.props.elapsedSeconds}
                    totalSeconds={this.props.boilMinutes*60} />
                <Timeline 
                    boilMinutes={this.props.boilMinutes} 
                    additions={this.props.additions} 
                    elapsedSeconds={this.props.elapsedSeconds} />
                <Instruction 
                    instructDone={this.props.instructDone} 
                    instructRewind={this.props.instructRewind}
                    timerStart={this.props.timerStart}
                    play={this.props.play} 
                    currentAdditionIndex={this.props.currentAdditionIndex} 
                    boilMinutes={this.props.boilMinutes} 
                    additions={this.props.additions} 
                    elapsedSeconds={this.props.elapsedSeconds} />
                <Options 
                    optFullscreen={this.props.optFullscreen} 
                    optRestart={this.props.optRestart}
                    full={this.props.fullscreen} />
             </div>
        );
    };
}

export default Brew;