import React from 'react';
import './Instruction.scss';

const Instruction = (props) => {

    let nextInstruction;
    let displaySeconds;
    let displayMinutes;
    let instructionBoxStyle = {};

    const totalAdditionCount = Object.keys(props.additions).length;
    const additionsInOrder = Object.keys(props.additions).sort((a,b) => { return b-a });
    
    const currentAdditionTime = additionsInOrder[props.currentAdditionIndex];

    if(totalAdditionCount === 0) {
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
            nextInstruction = "Nothing added to this brew yet, add some additions!";
            instructionBoxStyle = { backgroundColor: '#BFDAEA' } //default accent color
        }
        // If secondsUntil is negative, this addition time has passed, style appropriately
        if(secondsUntil < 0) {
            nextInstruction = "Boil time has expired";
            instructionBoxStyle = { backgroundColor: '#ff9898' } //light red
        } 
    }
    // If the currentAdditionIndex exceeds the amount of additions, then we're done!
    else if(props.currentAdditionIndex >= totalAdditionCount) {
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
            instructionBoxStyle = { backgroundColor: '#BFDAEA' } //default accent color
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
        let additionSeconds = props.boilMinutes*60 - currentAdditionTime*60;
        // Find the amount of seconds until that next addition -- could be positive or negative
        let secondsUntil = additionSeconds - props.elapsedSeconds;
        
        // Split the secondsUntil into minutes and seconds -- for the timer
        let absoluteSecondsUntil = Math.abs(secondsUntil);
        displayMinutes = Math.floor(absoluteSecondsUntil / 60);
        displayMinutes = ('0' + displayMinutes).slice(-2);
        displaySeconds = absoluteSecondsUntil - displayMinutes * 60;
        displaySeconds = ('0' + displaySeconds).slice(-2);

        nextInstruction = props.additions[currentAdditionTime].map((item) => {
            return <p key={item.name}>{item.amount} {item.name}</p>;
        })

        // If secondsUntil is positive, this addition hasn't happened yet -- style based on the type of addition incoming
        if(secondsUntil >= 0) {
            // Use the first instruction in this addition to style the thing
            const additionType = props.additions[Object.keys(props.additions)[props.currentAdditionIndex]][0].type;

            switch(additionType) {
                case 'hops':
                    instructionBoxStyle = { backgroundColor: '#a9d1c1'};
                    break;
                case 'malt':
                    instructionBoxStyle = { backgroundColor: '#dcaa99'};
                    break;
                default:
                    instructionBoxStyle = { backgroundColor: '#BFDAEA'};
                    break;
            }
        } else {
            instructionBoxStyle = {
                backgroundColor:'#ff9898'   // light red
            }
        } 

        //If secondsUntil next instruction equals 30 then vibrate
        if(secondsUntil === 120){
            window.navigator.vibrate(800);
        } else if(secondsUntil === 30) { 
            window.navigator.vibrate([400,200,400]);            
        } else if (secondsUntil === 15) {
            window.navigator.vibrate([200,200,200,200,200]);
        }

    }

    return (
        <div style={instructionBoxStyle} className='instructionBox'>
            <div className='instructionDetailsContainer'>
                <div className='instructionDetails'>
                    {props.play ? 
                        <p className='nextAddition'>Next Addition:</p> :
                        <p className='nextAddition'>First Addition:</p> }
                    <div className='instruction'>
                        {nextInstruction}
                    </div>
                </div>
                
            </div>
            <div className='instructionTimerContainer'>
                <p className='instructionTimer'>{displayMinutes}:{displaySeconds}</p>
                <div className='instructionButtonContainer'>
                    <button className='instructionButton' onClick={props.instructRewind}><i className="fas fa-undo option-icon"></i></button>
                    {/* If recipe is 'playing' then display the DONE button, otherwise display the START button */}
                    {props.play ? 
                        <button onClick={props.instructDone} className='instructionButton instructionButton--main' id='instructionButton'><i className="fas fa-check"></i></button> :
                        <button onClick={props.timerStart} className="instructionButton instructionButton--main"><i className="fas fa-play"></i></button>}
                </div>
            </div>
        </div>
    )
}

export default Instruction; 