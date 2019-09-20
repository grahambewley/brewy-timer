import React, { Component } from 'react';
import Options from '../../components/Options/Options';
import CurrentTime from '../../components/CurrentTime/CurrentTime';
import Timeline from '../../components/Timeline/Timeline';
import ActionBox from '../../components/ActionBox/ActionBox';
import Controls from '../../components/Controls/Controls';

class Brew extends Component {

    render() {
        return (
            
            //this.props.additions.length > 0 ? 

                <div className='container'>
                    <CurrentTime 
                        elapsedSeconds={this.props.elapsedSeconds}
                        totalSeconds={this.props.boilMinutes*60} />
                    <Timeline 
                        boilMinutes={this.props.boilMinutes} 
                        additions={this.props.additions} 
                        elapsedSeconds={this.props.elapsedSeconds} />
                    <ActionBox 
                        additionCtrlOpen={this.props.additionCtrlOpen}
                        instructDone={this.props.instructDone} 
                        instructRewind={this.props.instructRewind}
                        timerStart={this.props.timerStart}
                        play={this.props.play} 
                        currentAdditionIndex={this.props.currentAdditionIndex} 
                        boilMinutes={this.props.boilMinutes} 
                        additions={this.props.additions} 
                        elapsedSeconds={this.props.elapsedSeconds} 
                        
                        newAddition={this.props.newAddition}
                        newAdditionUpdate={this.props.newAdditionUpdate}
                        additionAdd={this.props.additionAdd}
                        additionDelete={this.props.additionDelete}/>
                    <Options 
                        optFullscreen={this.props.optFullscreen} 
                        optRestart={this.props.optRestart}
                        full={this.props.fullscreen} />
                    <Controls 
                        additionCtrlOpen={this.props.additionCtrlOpen}
                        openAdditionControls={this.props.openAdditionControls}
                        closeAdditionControls={this.props.closeAdditionControls}
                        addNewAddition={this.props.addNewAddition}/>
                    
                </div> // :

                /*
                <div className={classes.startContainer}>
                    <h1 className={classes.startHeader}>Welcome to Brewy</h1>
                    <img className={classes.startImage} src={require('../../images/cheers.png')} alt='cheers'></img>
                    <Link to='/recipe'>
                        <button className={classes.startButton}>Get Started</button>
                    </Link>
                </div>
                */
        );
    };
}

export default Brew;