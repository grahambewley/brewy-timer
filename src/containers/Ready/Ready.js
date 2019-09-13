import React from 'react';
import AdditionTable from '../../components/AdditionTable/AdditionTable';
import { Link } from 'react-router-dom';

const AdditionInput = (props) => {
    return (
        <div className='wizardContainer'>
            <h1 className='wizardHeader'>Ready to start your boil</h1>
            <AdditionTable additions={props.additions}/>
            <h2 className='wizardSubhead'>Minutes: {props.boilMinutes}</h2>
            <Link to='/'>
                <button className='wizardButton'>Start</button>
            </Link>
        </div>
    );
}

export default AdditionInput;