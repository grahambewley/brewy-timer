import React from 'react';
import AdditionTable from '../../components/AdditionTable/AdditionTable';

const AdditionInput = (props) => {
    return (
        <div className='wizardContainer'>
            <h1 className='wizardHeader'>Brew Additions</h1>
            <AdditionTable additions={props.additions}/>
        </div>
    );
}

export default AdditionInput;