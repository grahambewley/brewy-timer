import React from 'react';
import {Link} from 'react-router-dom';

const BoilInput = (props) => {
    return (
        <div className='wizardContainer'>
            <h1 className='wizardHeader'>Input Boil Time</h1>
            <h2 className='wizardSubhead'>(in minutes)</h2>
            <input className='boilInput'></input>
            <Link to='/additions'>
                <button className='wizardButton'>Next</button>
            </Link>
        </div>
    );
}

export default BoilInput;