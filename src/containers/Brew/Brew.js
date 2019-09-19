import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Options from '../../components/Options/Options';
import CurrentTime from '../../components/CurrentTime/CurrentTime';
import Timeline from '../../components/Timeline/Timeline';
import Instruction from '../../components/Instruction/Instruction';
import classes from './Brew.module.scss';

class Brew extends Component {

    testFunction = () => {
        console.log('TESTING FUNCTION THING!');
    }
    
    render() {
        return (
            this.props.additions.length > 0 ? 

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
                </div> :

                <div className={classes.startContainer}>
                    <h1 className={classes.startHeader}>Welcome to Brewy</h1>
                    <img className={classes.startImage} src={require('../../images/cheers.png')} alt='cheers'></img>
                    <Link to='/recipe'>
                        <button className={classes.startButton}>Get Started</button>
                    </Link>
                </div>
        );
    };
}

export default Brew;