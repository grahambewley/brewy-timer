import React from 'react';
import Instruction from './Instruction/Instruction';
import AddAdditionControl from './AddAdditionControl/AddAdditionControl';
import ChangeBoilControl from './ChangeBoilControl/ChangeBoilControl';
import './ActionBox.scss';

const ActionBox = (props) => {

    let component;

    if(props.additionCtrlOpen) {
        component = (
            <AddAdditionControl 
                additionAdd={props.additionAdd}
                additionDelete={props.additionDelete} /> 
        )
    } 
    else if(props.boilCtrlOpen) {
        component = (
            <ChangeBoilControl />
        )
    }
    else {
        component = (
            <Instruction 
                openNewAdditionControl={props.openNewAdditionControl}
                instructDone={props.instructDone} 
                instructRewind={props.instructRewind}
                timerStart={props.timerStart}
                play={props.play} 
                currentAdditionIndex={props.currentAdditionIndex} 
                elapsedSeconds={props.elapsedSeconds} />
        )
    }

    return (
        <div className='instructionContainer'>
            {component}
        </div>
    )


}

export default ActionBox; 