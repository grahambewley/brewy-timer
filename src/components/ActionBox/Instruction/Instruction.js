import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Instruction.scss';

const Instruction = (props) => {

    useEffect(() => {
        console.log('[Instruction.js] useEffect triggered!');
    });

    let nextInstruction;
    let displaySeconds;
    let displayMinutes;
    let instructionBoxStyle = {};
    let bigButton = null;
    let smallButton = null;

    const totalAdditionCount = Object.keys(props.adds).length;
    const additionsInOrder = Object.keys(props.adds).sort((a,b) => { return b-a });
    
    const currentAdditionTime = additionsInOrder[props.currentAdditionIndex];

    // If nothing has been added to boil yet
    if(totalAdditionCount === 0) {
        // Big Button should be an addition-add button
        bigButton = (
            <button onClick={props.openNewAdditionControl} className='instructionButton instructionButton--main' ><i className="fas fa-plus"></i></button>
        )
        // Find the amount of seconds until brew ends
        let secondsUntil = props.boilMins*60 - props.elapsedSeconds;
        
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
        // Big Button should be the "next" button
        bigButton = (
            <button className='instructionButton instructionButton--main' onClick={props.instructRewind}><i className="fas fa-backward"></i></button>
        )
        // Find the amount of seconds until brew ends
        let secondsUntil = props.boilMins*60 - props.elapsedSeconds;
        
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
        // If this brew is already in progress, display instruction-done button
        if(props.play) {
            bigButton = (
                <button onClick={props.instructDone} className='instructionButton instructionButton--main' id='instructionButton'><i className="fas fa-check"></i></button>
            );
            // If this isn't the first addition, display the instruction-rewind button
            if(props.currentAdditionIndex > 0) {
                smallButton = (
                    <button className='instructionButton' onClick={props.instructRewind}><i className="fas fa-backward"></i></button>
                );
            }
            
        } else {
            bigButton = (
                <button onClick={props.timerStart} className="instructionButton instructionButton--main"><i className="fas fa-play"></i></button>
            )
        }

        // Get the amount of seconds that the next addition is required at    
        let additionSeconds = props.boilMins*60 - currentAdditionTime*60;
        // Find the amount of seconds until that next addition -- could be positive or negative
        let secondsUntil = additionSeconds - props.elapsedSeconds;
        
        // Split the secondsUntil into minutes and seconds -- for the timer
        let absoluteSecondsUntil = Math.abs(secondsUntil);
        displayMinutes = Math.floor(absoluteSecondsUntil / 60);
        displayMinutes = ('0' + displayMinutes).slice(-2);
        displaySeconds = absoluteSecondsUntil - displayMinutes * 60;
        displaySeconds = ('0' + displaySeconds).slice(-2);

        nextInstruction = props.adds[currentAdditionTime].map((item) => {
            return <p key={item.name}>{item.amount} {item.name}</p>;
        })

        // If secondsUntil is positive, this addition hasn't happened yet -- style based on the type of addition incoming
        if(secondsUntil >= 0) {
            // Use the first instruction in this addition to style the thing
            const additionType = props.adds[Object.keys(props.adds)[props.currentAdditionIndex]][0].type;

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
    }

    return (
        <div style={instructionBoxStyle} className='instructionBox'>
            <div className='instructionDetailsContainer'>
                <div key={props.currentAdditionIndex} className='instructionDetails'>
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
                    {smallButton}
                    {bigButton}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        adds: state.additions,
        boilMins: state.boilMinutes
    };
}
export default connect(mapStateToProps)(Instruction); 