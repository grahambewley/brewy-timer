import React from 'react';
import classes from './InputAdditionsTable.module.css';

const ImportAdditionsTable = (props) => {

    const additions = props.additions.map( ( addition, index ) => {
        return (
            <div className={classes.addition}>
                <div className={classes.additionData}>
                    <div className={classes.additionDataTop}>
                        <h3 className={classes.additionName}>{addition.name}</h3>
                        <button className={classes.actionButton}><i className='fas fa-minus'></i></button>
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
            { additions }
        </div>
    );
}

export default ImportAdditionsTable;