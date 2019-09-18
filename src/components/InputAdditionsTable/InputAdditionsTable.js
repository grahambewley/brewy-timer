import React from 'react';
import classes from './InputAdditionsTable.module.css';

const ImportAdditionsTable = (props) => {

    const additions = props.additions.map( ( addition, index ) => {
        return (
            <div key={index} className={classes.addition}>
                <div className={classes.additionData}>
                    <div className={classes.additionDataTop}>
                        <h3 className={classes.additionName}>{addition.name}</h3>
                        <button className={classes.actionButton} onClick={() => props.additionDelete(index)}><i className='fas fa-minus'></i></button>
                    </div>
                    <div className={classes.additionDataBottom}>
                        <input className={classes.additionInputAmount} placeholder={addition.amount}></input>
                        <span>@ <input className={classes.additionInputTime} placeholder={addition.time}></input> mins</span> 
                    </div>
                </div>
            </div>
        );
    }); 

    return (
        <div className={classes.container}>
            <h2 className={classes.additionsHeader}>Current Additions: </h2>
            {props.additions.length > 0 ? 
                additions : 
                <div className={classes.noAdditions}>
                    <h1 className={classes.noAdditionsHeader}>No additions yet, add one above</h1>
                </div>
            }
        </div>
    );
}

export default ImportAdditionsTable;