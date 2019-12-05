import React from 'react';
import { connect } from 'react-redux'
import classes from './Brew.module.scss';

const brew = (props) => {

    const thisBrew = props.brews[props.index];
    console.log("This brew is ", thisBrew);

    return (
        <div className={classes.container}>
            <div className={classes.brewLeftSide}>
                <h2 className={classes.brewName}>{thisBrew.name}</h2>
                {thisBrew.origGravity !== null ? 
                    <>
                        <span className={classes.label}>OG: </span>
                        <span className={classes.brewOG}>{thisBrew.origGravity}</span> 
                    </> : null}
            </div>
            <div className={classes.brewRightSide}>
                <span className={classes.label}>Brewed On: </span>
                <p></p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        brews: state.postBrew.brews       
    }
}

export default connect(mapStateToProps)(brew);