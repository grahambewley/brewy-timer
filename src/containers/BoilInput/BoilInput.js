import React from 'react';

const BoilInput = (props) => {
    return (
        <div className='wizardContainer'>
            <h1 className='wizardHeader'>Input Boil Time</h1>
            <h2 className='wizardSubhead'>(in minutes)</h2>
            <input className='boilInput' onChange={props.boilChange} value={props.boilMinutes}></input>

        </div>
    );
}

export default BoilInput;