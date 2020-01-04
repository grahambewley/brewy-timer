import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProtectedPagePrompt.module.scss';

const ProtectedPagePrompt = () => {
    return (
        <div className={classes.container}>
            <p className={classes.label}>You must be logged in to access this.</p>
            <p className={classes.button}><Link to='/signin'>Sign In</Link></p>
        </div>
    );
}

export default ProtectedPagePrompt;