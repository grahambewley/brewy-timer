import React from 'react';
import classes from './InputBoilMinutes.module.css';

const InputBoilMinutes = (props) => {

    return (
        <div className={classes.boilMinsContainer}>
            <label className={classes.label}>Boil Minutes</label>
            <div className={classes.boilMinsAdjustContainer}>
                <button onClick={props.boilMinus} className={classes.iconButton}><i className='fas fa-minus'></i></button>
                <span className={classes.boilMinsCurrent}>{props.boilMins}</span>
                <button onClick={props.boilPlus} className={classes.iconButton}><i className='fas fa-plus'></i></button>
            </div>
        </div>
    );
}

export default InputBoilMinutes;