import React from 'react';
import classes from  './Modal.module.scss';
import Aux from '../../../hoc/Auxi';
import Backdrop from './Backdrop/Backdrop';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show />
            <div className={classes.Modal} style={{}}>
                <h1 className={classes.Modal__header}>{ props.modalHeader }</h1>
                <p className={classes.Modal__content}>{ props.modalContent }</p>
                <button className={classes.Modal__affirmative} onClick={props.modalConfirm}>{props.modalConfirmButtonText}</button>
                <button className={classes.Modal__negative} onClick={props.modalCancel}>{props.modalCancelButtonText}</button>
            </div>
        </Aux>
    );
} 

export default modal;
