import React from 'react';
import classes from './SignOut.module.scss';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => {

    return (
        <button className={classes.Button} onClick={firebase.doSignOut}>Sign Out</button>
    )
}

export default withFirebase(SignOutButton);