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
        let additionSeconds = props.boilMinutes*60 - props.additions[props.currentAdditionIndex].time*60;
        // Find the amount of seconds until that next addition -- could be positive or negative
        let secondsUntil = additionSeconds - props.elapsedSeconds;
        
        // Split the secondsUntil into minutes and seconds -- for the timer
        let absoluteSecondsUntil = Math.abs(secondsUntil);
        displayMinutes = Math.floor(absoluteSecondsUntil / 60);
        displayMinutes = ('0' + displayMinutes).slice(-2);
        displaySeconds = absoluteSecondsUntil - displayMinutes * 60;
        displaySeconds = ('0' + displaySeconds).slice(-2);

        nextInstruction = props.additions[props.currentAdditionIndex].amount + " of " + props.additions[props.currentAdditionIndex].name;

        // If secondsUntil is positive, this addition hasn't happened yet -- style based on the type of addition incoming
        if(secondsUntil >= 0) {
            const additionType = props.additions[props.currentAdditionIndex].type;

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
        } else {
            instructionBoxStyle = {
                backgroundColor:'#ff9898'   // light red
            }
        } 

        //If secondsUntil next instruction equals 30 then vibrate
        if(secondsUntil === 30){
            window.navigator.vibrate(200);
        }
    }

    return (
        <div className='instructionContainer'>
            <div style={instructionBoxStyle} className='instructionBox'>
                <div className='instructionDetailsContainer'>
                    <div className='instructionDetails'>
                        {props.play ? 
                            <p className='nextAddition'>Next Addition:</p> :
                            <p className='nextAddition'>First Addition:</p> }
                        <p className='instruction'>{nextInstruction}</p>
                    </div>
                    {/* If recipe is 'playing' then display the DONE button, otherwise display the START button */}
                    {props.play ? 
                        <button onClick={props.instructDone} className='instructionButton' id='instructionButton'>Done</button> :
                        <button onClick={props.timerStart} className="instructionButton">Start Boil</button>}
                </div>
                <div className='instructionTimerContainer'>
                    <p className='instructionTimer'>{displayMinutes}:{displaySeconds}</p>
                    <button className='instructionRewind' onClick={props.instructRewind}><i className="fas fa-undo option-icon"></i></button>
                </div>
            </div>
        </div>
    )


}

export default Instruction; 