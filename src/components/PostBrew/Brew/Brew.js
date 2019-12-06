import React from 'react';
import { connect } from 'react-redux'
import FermentationTimeline from '../FermentationTimeline/FermentationTimeline.js';
import classes from './Brew.module.scss';
import moment from 'moment';

const brew = (props) => {

    const thisBrew = props.brews[props.index];
    const brewDate = moment.unix(thisBrew.startDate).format('M/D/YY');

    return (
        <div className={classes.container}>
            <div className={classes.brewMain}>
                <h2 className={classes.brewName}>{thisBrew.name}</h2>
            </div>
            <div className={classes.brewDetails}>
                <div className={classes.brewDetail}>
                    <span className={classes.brewDetail__label}>Date: </span>
                    <span className={classes.brewDetail__detail}>{brewDate}</span>
                </div>
                {thisBrew.origGravity !== null ? 
                    <div className={classes.brewDetail}>
                        <span className={classes.brewDetail__label}>OG: </span>
                        <span className={classes.brewDetail__detail}>{thisBrew.origGravity}</span> 
                    </div> : null}
            </div>
            <FermentationTimeline stages={thisBrew.stages}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        brews: state.postBrew.brews       
    }
}

export default connect(mapStateToProps)(brew);