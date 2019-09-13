import React from 'react';
import AdditionTable from '../../components/AdditionTable/AdditionTable';

const AdditionInput = (props) => {
    return (
        <div>
            <h1>Ready to start your boil</h1>
            <AdditionTable additions={props.additions}/>
            <h2>Minutes: {props.boilMinutes}</h2>
            <button>Click Here to Begin</button>
        </div>
    );
}

export default AdditionInput;