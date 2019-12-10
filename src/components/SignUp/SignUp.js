import React from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm/SignUpForm';
import classes from './SignUp.module.scss';
require('dotenv').config();

const SignUpPage = () => (
    <div className={classes.container}>
        <h1 className={classes.header}>Create Account</h1>
        <SignUpForm />
        <p className={classes.link}>
            Already have an account? <Link to='/signin'>Sign In</Link>
        </p>
    </div>
);


export default SignUpPage;
export { SignUpForm };