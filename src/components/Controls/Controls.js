import React from 'react';
import classes from './Controls.module.scss';

const Controls = (props) => {

    let buttons;
    if(props.additionCtrlOpen) {
        buttons = [
            <button onClick={props.addNewAddition} className={classes.controlGreen}><i className="fas fa-check"></i></button>,
            <button onClick={props.closeAdditionControls} className={classes.controlRed}><i className="fas fa-times"></i></button> 
        ]
    }

    else {
        buttons = [
            <button onClick={props.openAdditionControls} className={classes.controlGreen}><i className="fas fa-plus"></i></button>
        ]
    }

    return (
        <div className={classes.container}>
            {buttons}
        </div>
    );
} 

export default Controls;