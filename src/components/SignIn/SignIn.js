import React from 'react'
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm/SignInForm';
import classes from './SignIn.module.scss';
require('dotenv').config();

const SignInPage = () => (
    <div className={classes.container}>
        <h1 className={classes.header}>Sign In</h1>
        <SignInForm />
        <p className={classes.link}>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
    </div>
);


export default SignInPage;
export { SignInForm };