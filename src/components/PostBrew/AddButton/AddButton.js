import React from 'react';
import classes from './AddButton.module.scss';


const addButton = (props) => {
    return (
        <button className={classes.button} onClick={props.clicked}>
            <i className="fas fa-plus"></i>
        </button>
    );
}

export default addButton;