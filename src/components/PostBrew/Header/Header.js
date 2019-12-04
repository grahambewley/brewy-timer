import React from 'react';
import classes from './Header.module.scss';

const header = () => {
    return (
        <div className={classes.container}>
            <h1>Post-Brew</h1>
        </div>
    );
}

export default header;