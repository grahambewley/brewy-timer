import React from 'react';
import { connect } from 'react-redux'
import classes from './Brew.module.scss';

const brew = (props) => {

    const thisBrew = props.brews[props.index];
    console.log("This brew is ", thisBrew);

    return (
        <div className={classes.container}>
            <h2 className={classes.brewName}>{thisBrew.name}</h2>
            {thisBrew.origGravity !== null ? <p className={classes.brewOG}>OG: {thisBrew.origGravity}</p> : null}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        brews: state.postBrew.brews       
    }
}

export default connect(mapStateToProps)(brew);