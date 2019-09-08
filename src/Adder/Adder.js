import React from 'react';
import './Adder.css';

const adder = (props) => {
    return (
        <div className='adderContainer'>
            <select id='additionType' name='additionType'>
                <option value='hops'>Hops</option>
                <option value='malt'>Malt</option>
                <option value='extra'>Extra</option>
            </select>
            <input type='number' name='time' placeholder='Time' />
            <input type='text' name='amount' placeholder='Amount' />
            <input type='name' name='name' placeholder='Name' />
            <button onClick={ props.submitFunction }>Add</button>
        </div>
    )
}

export default adder;