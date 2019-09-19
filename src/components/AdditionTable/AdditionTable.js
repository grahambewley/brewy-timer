import React from 'react';
import './AdditionTable.scss';

const AdditionTable = (props) => {
    
    const additionComponents = props.additions.map(add => {
        const typeClass = add.type + 'Symbol';

        return (
            <tr>
                <td><div className={typeClass}></div></td>
                <td>{add.name}</td>
                <td>{add.amount}</td>
                <td>{add.time}</td>
            </tr>
        )
    });
    return (
        <table className='additionTable'>

            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                { additionComponents }
            </tbody>
        </table>
    );
}

export default AdditionTable;