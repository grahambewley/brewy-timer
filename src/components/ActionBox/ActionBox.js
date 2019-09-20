import React from 'react';
import Instruction from '../Instruction/Instruction';
import AddAdditionControl from '../AddAdditionControl/AddAdditionControl';
import './ActionBox.scss';

const ActionBox = (props) => {

    let component;

    if(props.additionCtrlOpen) {
        component = (
            <AddAdditionControl 
                newAddition={props.newAddition}
                newAdditionUpdate={props.newAdditionUpdate}
                additionAdd={props.additionAdd}
                additionDelete={props.additionDelete} /> 
        )
    } 

    else {
        component = (
            <Instruction 
                instructDone={props.instructDone} 
                instructRewind={props.instructRewind}
                timerStart={props.timerStart}
                play={props.play} 
                currentAdditionIndex={props.currentAdditionIndex} 
                boilMinutes={props.boilMinutes} 
                additions={props.additions} 
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