import React from 'react';
import classes from './Controls.module.scss';

const Controls = (props) => {

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
    }
    else {
        buttons = [
            <button key='opnBoil' onClick={props.openBoilControl} className={classes.controlWhite}><i className="fas fa-hourglass-half"></i></button>,
            <button key='opnAdd' onClick={props.openAdditionControl} className={classes.controlGreen}><i className="fas fa-plus"></i></button>
        ]
    }

    return (
        <div className={classes.container}>
            {buttons}
        </div>
    );
} 

export default Controls;