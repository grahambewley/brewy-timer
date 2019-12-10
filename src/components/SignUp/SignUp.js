import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import InputField from '../UI/InputField/InputField';
import WordButton from '../UI/WordButton/WordButton';
import classes from './SignUp.module.scss';
require('dotenv').config();

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase}/>}
        </FirebaseContext.Consumer>
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
        
            event.preventDefault();
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <div className={classes.container}>
                <form className={classes.form} onSubmit={this.onSubmit}>
                    <InputField
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                    />
                    <InputField
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <InputField
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <InputField
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <WordButton 
                        disabled={isInvalid} 
                        type="submit">Sign Up</WordButton>
                    {error && <p className={classes.error}>{error.message}</p>}
                </form>
            </div>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
    </p>
);

export default SignUpPage;
export { SignUpForm, SignUpLink };