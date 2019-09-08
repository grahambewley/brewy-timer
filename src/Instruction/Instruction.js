import React from 'react';

const Instruction = (props) => {
    
    let nextInstruction = '';

    const sortedAdditions = props.additions.sort((b,a) => a[0] - b[0]);
    console.log(sortedAdditions);

    for(let i=0; i < sortedAdditions.length; i++) {
        if(sortedAdditions[i][4] == false) {
            nextInstruction = "Add " + sortedAdditions[i][2] + " of " + sortedAdditions[i][3];
            break
        }
    }

    return (
        <div>
            <p>Next Instruction:</p>
            <p>{nextInstruction}</p>
        </div>
    )


}

export default Instruction; 