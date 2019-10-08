import React from 'react';
import classes from  './Modal.module.scss';
import Aux from '../../hoc/Auxi';
import Backdrop from './Backdrop/Backdrop';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show />
            <div className={classes.Modal} style={{}}>
                <h1 className={classes.Modal__header}>Modal header</h1>
                <p className={classes.Modal__content}>Modal text modal text modal text modal text</p>
                <button className={classes.Modal__affirmative}>OK</button>
                <button className={classes.Modal__negative}>Cancel</button>
            </div>
        </Aux>
    );
} 

export default modal;
