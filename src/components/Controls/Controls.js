import React from 'react';
import classes from './Controls.module.scss';

const Controls = (props) => {

    return (
        <div className={classes.container}>
            { props.ctrlOpen ? 
            <button onClick={props.addToAdditions} className={classes.controlGreen}><i className="fas fa-check"></i></button>
            : <button onClick={props.openControls} className={classes.controlGreen}><i className="fas fa-plus"></i></button> }
            { props.ctrlOpen ? 
            <button onClick={props.closeControls} className={classes.controlRed}><i className="fas fa-times"></i></button> 
            : null}
        </div>
    );
} 

export default Controls;