import React, { Component } from 'react';
import { withRouter } from 'react-router';
import InputField from '../../UI/InputField/InputField';
import WordButton from '../../UI/WordButton/WordButton';
import classes from './SignInForm.module.scss';
import { withFirebase } from '../../Firebase';
import { compose } from 'recompose';
require('dotenv').config();

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };  

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';

        return (
            <div className={classes.container}>
                <form className={classes.form} onSubmit={this.onSubmit}>
                    <InputField
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <InputField
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <WordButton 
                        disabled={isInvalid} 
                        type="submit">Sign In</WordButton>
                    {error && <p className={classes.error}>{error.message}</p>}
                </form>
            </div>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInForm;
