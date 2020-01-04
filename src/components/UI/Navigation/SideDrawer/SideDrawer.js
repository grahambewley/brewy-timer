import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../../Firebase';
import NavigationItems from '../NavigationItems/NavigationItems';
import SignOutButton from '../../../SignOut';
import classes from './SideDrawer.module.scss';
import Backdrop from '../../Backdrop/Backdrop';

const sideDrawer = ( props, { firebase } ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
                {props.auth ? 
                <SignOutButton />
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

export default connect(mapStateToProps)(withFirebase(sideDrawer));