import React, { Component } from 'react';
import Options from '../../components/Options/Options';
import CurrentTime from '../../components/Timeline/CurrentTime/CurrentTime';
import Timeline from '../../components/Timeline/Timeline';
import ActionBox from '../../components/ActionBox/ActionBox';
import Controls from '../../components/Controls/Controls';
import Modal from '../../components/Modal/Modal';

class Brew extends Component {

    render() {
        return (
            
            //this.props.additions.length > 0 ? 

                <div className='container'>
                    {this.props.showModal ? 
                        <Modal 
                            modalConfirm={this.props.modalConfirm} 
                            modalCancel={this.props.modalCancel}
                            modalHeader={this.props.modalHeader}
                            modalContent={this.props.modalContent}>
                        </Modal> : 
                    null}
                    <CurrentTime 
                        elapsedSeconds={this.props.elapsedSeconds}
                        totalSeconds={this.props.boilMinutes*60} />
                    <Timeline 
                        boilMinutes={this.props.boilMinutes} 
                        additions={this.props.additions} 
                        elapsedSeconds={this.props.elapsedSeconds} />
                    <ActionBox 
                        instructDone={this.props.instructDone} 
                        instructRewind={this.props.instructRewind}
                        timerStart={this.props.timerStart}
                        play={this.props.play} 
                        currentAdditionIndex={this.props.currentAdditionIndex} 
                        boilMinutes={this.props.boilMinutes} 
                        additions={this.props.additions} 
                        elapsedSeconds={this.props.elapsedSeconds} 
                        
                        additionCtrlOpen={this.props.additionCtrlOpen}
                        newAddition={this.props.newAddition}
                        newAdditionUpdate={this.props.newAdditionUpdate}
                        
                        boilCtrlOpen={this.props.boilCtrlOpen}
                        boilMinus={this.props.boilMinus}
                        boilPlus={this.props.boilPlus}
                        />
                    <Options 
                        optFullscreen={this.props.optFullscreen} 
                        optRestart={this.props.optRestart}
                        full={this.props.fullscreen} />
                    <Controls 
                        additionCtrlOpen={this.props.additionCtrlOpen}
                        openAdditionControl={this.props.openAdditionControl}
                        closeAdditionControl={this.props.closeAdditionControl}
                        addNewAddition={this.props.addNewAddition}
                        boilCtrlOpen={this.props.boilCtrlOpen}
                        openBoilControl={this.props.openBoilControl}
                        closeBoilControl={this.props.closeBoilControl}
                        />
                    
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