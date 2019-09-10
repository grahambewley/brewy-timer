import React from 'react';
import './Instruction.css';

const Instruction = (props) => {

    let nextInstruction = '';
    let displaySeconds;
    let displayMinutes;
    let instructionBoxStyle = {};

    // If the currentAdditionIndex exceeds the amount of additions, then we're done!
    if(props.currentAdditionIndex >= props.additions.length) {
        // Find the amount of seconds until brew ends
        let secondsUntil = props.boilMinutes*60 - props.elapsedSeconds;
        
        // Split the secondsUntil into minutes and seconds -- for the timer
        let absoluteSecondsUntil = Math.abs(secondsUntil);
        displayMinutes = Math.floor(absoluteSecondsUntil / 60);
        displayMinutes = ('0' + displayMinutes).slice(-2);
        displaySeconds = absoluteSecondsUntil - displayMinutes * 60;
        displaySeconds = ('0' + displaySeconds).slice(-2);
        
        // If secondsUntil is positive, this addition hasn't happened yet -- style based on the type of addition incoming
        if(secondsUntil >= 0) {
            nextInstruction = "That's it! Continue to boil until the timer expires";
            instructionBoxStyle = { backgroundColor: '#e09f7d' } //beer color
        }
        // If secondsUntil is negative, this addition time has passed, style appropriately
        if(secondsUntil < 0) {
            nextInstruction = "Boil time has expired";
            instructionBoxStyle = { backgroundColor: '#ff9898' } //light red
        } 
    } 
    // Otherwise, display the next instruction and the timer
    else {
        // Get the amount of seconds that the next addition is required at    
        let additionSeconds = props.boilMinutes*60 - props.additions[props.currentAdditionIndex][0]*60;
        // Find the amount of seconds until that next addition -- could be positive or negative
        let secondsUntil = additionSeconds - props.elapsedSeconds;
        
        // Split the secondsUntil into minutes and seconds -- for the timer
        let absoluteSecondsUntil = Math.abs(secondsUntil);
        displayMinutes = Math.floor(absoluteSecondsUntil / 60);
        displayMinutes = ('0' + displayMinutes).slice(-2);
        displaySeconds = absoluteSecondsUntil - displayMinutes * 60;
        displaySeconds = ('0' + displaySeconds).slice(-2);

        nextInstruction = props.additions[props.currentAdditionIndex][2] + " of " + props.additions[props.currentAdditionIndex][3];

        // If secondsUntil is positive, this addition hasn't happened yet -- style based on the type of addition incoming
        if(secondsUntil >= 0) {
            const additionType = props.additions[props.currentAdditionIndex][1];

            switch(additionType) {
                case 'hops':
                    instructionBoxStyle = { backgroundColor: '#a9d1c1'};
                    break;
                case 'malt':
                    instructionBoxStyle = { backgroundColor: '#dcaa99'};
                    break;
                default:
                    instructionBoxStyle = { backgroundColor: 'white'};
                    break;
            }
        }
        // If secondsUntil is negative, this addition time has passed, style appropriately
        if(secondsUntil < 0) {
            instructionBoxStyle = {
                backgroundColor:'#ff9898'   // light red
            }
        } 
    }

    return (
        <div className='instructionContainer'>
            <div style={instructionBoxStyle} className='instructionBox'>
                <div className='instrucitonDetailsContainer'>
                    <p className='nextAddition'>Next Addition:</p>
                    <p className='instruction'>{nextInstruction}</p>
                    <button onClick={props.done} className='instructionButton'>DONE</button>
                </div>
                <div className='instructionTimerContainer'>
                    <p className='instructionTimer'>{displayMinutes}:{displaySeconds}</p>
                    <button className='instructionRewind' onClick={props.rewind}><i className="fas fa-undo option-icon"></i></button>
                </div>
            </div>
        </div>
    )


}

export default Instruction; 