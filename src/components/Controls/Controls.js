import React from 'react';
import classes from './Controls.module.scss';

const Controls = (props) => {
    const totalAdditionCount = Object.keys(props.additions).length;

    let buttons;
    if(props.additionCtrlOpen) {
        buttons = [
            <button key='clsAdd' onClick={props.closeAdditionControl} className={classes.controlRed}><i className="fas fa-times"></i></button>,
            <button key='addAdd' onClick={props.addNewAddition} className={classes.controlGreen}><i className="fas fa-check"></i></button>
        ]
    }
    else if(props.boilCtrlOpen) {
        buttons = [
            <button key='clsBoil' onClick={props.closeBoilControl} className={classes.controlGreen}><i className="fas fa-check"></i></button>
        ]
    } else if(totalAdditionCount === 0) {
        buttons = null;
    }
    else {

        buttons = [
            <button key='opnAdd' onClick={props.openNewAdditionControl} className={classes.controlGreen}><i className="fas fa-plus"></i></button>
        ]
    }

    return (
        <div className={classes.container}>
            {buttons}
        </div>
    );
} 

export default Controls;