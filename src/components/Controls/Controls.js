import React from 'react';
import classes from './Controls.module.scss';

const Controls = (props) => {

    let buttons;
    if(props.additionCtrlOpen) {
        buttons = [
            <button onClick={props.closeAdditionControl} className={classes.controlRed}><i className="fas fa-times"></i></button>,
            <button onClick={props.addNewAddition} className={classes.controlGreen}><i className="fas fa-check"></i></button>
        ]
    }
    else if(props.boilCtrlOpen) {
        buttons = [
            <button onClick={props.closeBoilControl} className={classes.controlGreen}><i className="fas fa-check"></i></button>
        ]
    }
    else {
        buttons = [
            <button onClick={props.openBoilControl} className={classes.controlWhite}><i className="fas fa-hourglass-half"></i></button>,
            <button onClick={props.openAdditionControl} className={classes.controlGreen}><i className="fas fa-plus"></i></button>
        ]
    }

    return (
        <div className={classes.container}>
            {buttons}
        </div>
    );
} 

export default Controls;