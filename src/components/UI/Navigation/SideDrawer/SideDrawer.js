import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../../Firebase';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';
import Backdrop from '../../Backdrop/Backdrop';
import * as actionCreators from '../../../../store/actions/actions';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    const signOutHandler = () => {
        props.firebase
            .doSignOut()
            .then(() => {
                props.onSignOut();
            });
    }

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
                {props.auth ? 
                <p className={classes.authLink}><button onClick={signOutHandler}>Log Out</button></p>
                : <p className={classes.authLink}><Link to='/signin'>Sign In</Link></p> }
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.settings.authUser,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSignOut: () => dispatch(actionCreators.SIGN_OUT_USER)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(sideDrawer));