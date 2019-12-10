import React from 'react';
import classes from './InputField.module.scss';

const inputField = (props) => {
    return (
        <input 
            className={classes.Input} 
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            type={props.type}
            placeholder={props.placeholder} />
    );
}

export default inputField;