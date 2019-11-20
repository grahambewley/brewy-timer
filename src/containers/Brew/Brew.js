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
            <div className='container'>
                {this.props.showModal ? 
                    <Modal 
                        modalConfirm={this.props.modalConfirm} 
                        modalCancel={this.props.modalCancel}
                        modalConfirmButtonText={this.props.modalConfirmButtonText}
                        modalCancelButtonText={this.props.modalCancelButtonText}
                        modalHeader={this.props.modalHeader}
                        modalContent={this.props.modalContent}>
                    </Modal> : 
                null}
                <CurrentTime 
                    elapsedSeconds={this.props.elapsedSeconds}
                    totalSeconds={this.props.boilMinutes*60} />
                <Timeline 
                    boilMinutes={this.props.boilMinutes} 
                    elapsedSeconds={this.props.elapsedSeconds} 
                    instructionMinutesDone={this.props.instructionMinutesDone}
                    additionTap={this.props.additionTap}/>
                <ActionBox 
                    instructDone={this.props.instructDone} 
                    instructRewind={this.props.instructRewind}
                    timerStart={this.props.timerStart}
                    play={this.props.play} 
                    currentAdditionIndex={this.props.currentAdditionIndex} 
                    boilMinutes={this.props.boilMinutes} 
                    elapsedSeconds={this.props.elapsedSeconds} 
                    openNewAdditionControl={this.props.openNewAdditionControl}
                    additionCtrlOpen={this.props.additionCtrlOpen}
                    boilCtrlOpen={this.props.boilCtrlOpen}
                    boilMinus={this.props.boilMinus}
                    boilPlus={this.props.boilPlus}
                    />
                <Options 
                    optFullscreen={this.props.optFullscreen} 
                    optRestart={this.props.optRestart}
                    full={this.props.fullscreen} 
                    boilCtrlOpen={this.props.boilCtrlOpen}
                    openBoilControl={this.props.openBoilControl}
                    closeBoilControl={this.props.closeBoilControl}/>
                <Controls 
                    additionCtrlOpen={this.props.additionCtrlOpen}
                    openNewAdditionControl={this.props.openNewAdditionControl}
                    closeAdditionControl={this.props.closeAdditionControl}
                    addNewAddition={this.props.addNewAddition}
                    boilCtrlOpen={this.props.boilCtrlOpen}
                    closeBoilControl={this.props.closeBoilControl}/>
                
            </div>
        );
    };
}


export default Brew;