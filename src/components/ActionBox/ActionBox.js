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
                newAddition={props.newAddition}
                newAdditionUpdate={props.newAdditionUpdate}
                additionAdd={props.additionAdd}
                additionDelete={props.additionDelete} /> 
        )
    } 
    else if(props.boilCtrlOpen) {
        component = (
            <ChangeBoilControl 
                boilMins={props.boilMinutes}
                boilMinus={props.boilMinus}
                boilPlus={props.boilPlus}/>
        )
    }
    else {
        component = (
            <Instruction 
                openAdditionControl={props.openAdditionControl}
                instructDone={props.instructDone} 
                instructRewind={props.instructRewind}
                timerStart={props.timerStart}
                play={props.play} 
                currentAdditionIndex={props.currentAdditionIndex} 
                doneTHroughMinutes={props.doneThroughMinutes}
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