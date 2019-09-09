import React from 'react';
import './Instruction.css';

const Instruction = (props) => {
    
    let nextInstruction = '';

    const sortedAdditions = props.additions.sort((b,a) => a[0] - b[0]);

    for(let i=0; i < sortedAdditions.length; i++) {
        if(sortedAdditions[i][4] === false) {

            let additionSeconds = props.boilMinutes*60 - sortedAdditions[i][0]*60;

            let secondsUntil = additionSeconds - props.elapsedSeconds;

            nextInstruction = "Add " + sortedAdditions[i][2] + " of " + sortedAdditions[i][3] + " in " + secondsUntil + ' seconds';
            break
        }
    }

    return (
        <div className='instructionContainer'>
            <p className='instructionHeader'>Next Instruction:</p>
            <p className='instruction'>{nextInstruction}</p>
            <button className='instructionButton'>DONE</button>
        </div>
    )


}

export default Instruction; 