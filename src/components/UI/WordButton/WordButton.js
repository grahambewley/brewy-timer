import React from 'react';
import classes from './WordButton.module.scss';

const wordButton = (props) => {
    return (
        <button
            className={classes.button}
            disabled={props.disabled} 
            type={props.type}>
                {props.children}
        </button>
    );
}

export default wordButton;