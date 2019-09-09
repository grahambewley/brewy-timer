import React from 'react';
import './Instruction.css';

const Instruction = (props) => {

    // Get the amount of seconds that the next addition is required at    
    let additionSeconds = props.boilMinutes*60 - props.additions[props.currentAdditionIndex][0]*60;
    // Find the amount of seconds until that next addition -- could be positive or negative
    let secondsUntil = additionSeconds - props.elapsedSeconds;
    
    // Split the secondsUntil into minutes and seconds -- for the timer
    let absoluteSecondsUntil = Math.abs(secondsUntil);
    let displayMinutes = Math.floor(absoluteSecondsUntil / 60);
    displayMinutes = ('0' + displayMinutes).slice(-2);
    var displaySeconds = absoluteSecondsUntil - displayMinutes * 60;
    displaySeconds = ('0' + displaySeconds).slice(-2);

    let nextInstruction = props.additions[props.currentAdditionIndex][2] + " of " + props.additions[props.currentAdditionIndex][3];
    let instructionContainerStyle = {};

    // If secondsUntil is positive, this addition hasn't happened yet -- style based on the type of addition incoming
    if(secondsUntil >= 0) {
        const additionType = props.additions[props.currentAdditionIndex][1];

        switch(additionType) {
            case 'hops':
                instructionContainerStyle = { backgroundColor: '#a9d1c1'};
                break;
            default:
                instructionContainerStyle = { backgroundColor: 'white'};
                break;

        }
    }
    // If secondsUntil is negative, this addition time has passed, style appropriately
    if(secondsUntil < 0) {
        instructionContainerStyle = {
            backgroundColor:'#ff9898'   // light red
        }
    } 

    return (
        <div style={instructionContainerStyle} className='instructionContainer'>
            <div className='instrucitonDetails'>
                <p className='nextAddition'>Next Addition:</p>
                <p className='instruction'>{nextInstruction}</p>
                <button onClick={props.done} className='instructionButton'>DONE</button>
            </div>
            <p className='instructionTimer'>{displayMinutes}:{displaySeconds}</p>
        </div>
    )


}

export default Instruction; 