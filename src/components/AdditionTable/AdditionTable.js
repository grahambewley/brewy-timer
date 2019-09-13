import React from 'react';
import './AdditionTable.css';

const AdditionTable = (props) => {
    
    const additionComponents = props.additions.map(add => {
        return (
            <tr>
                <td>{add.type}</td>
                <td>{add.name}</td>
                <td>{add.amount}</td>
                <td>{add.time}</td>
            </tr>
        )
    });
    return (
        <table className='additionTable'>
            <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Time</th>
            </tr>
            { additionComponents }
        </table>
    );
}

export default AdditionTable;