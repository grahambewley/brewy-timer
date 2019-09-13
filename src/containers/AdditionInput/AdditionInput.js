import React from 'react';
import AdditionTable from '../../components/AdditionTable/AdditionTable';

const AdditionInput = (props) => {
    return (
        <div>
            <h1>Additions for your brew</h1>
            <AdditionTable additions={props.additions}/>
        </div>
    );
}

export default AdditionInput;