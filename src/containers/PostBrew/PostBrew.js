import React, { Component } from 'react';
import { connect } from 'react-redux';
import Brew from '../../components/PostBrew/Brew/Brew';
import AddButton from '../../components/PostBrew/AddButton/AddButton';
import NewFermentationOverlay from '../../components/PostBrew/NewFermentationOverlay/NewFermentationOverlay.js';
import classes from './PostBrew.module.scss';

class PostBrew extends Component {

    state = {
        isNewFermentationOpen: false,
    }

    openNewFermentationHandler = () => {
        console.log("Clicked button");
        this.setState({isNewFermentationOpen: true});
    }

    render() {        
        const brewComponents = this.props.brews.map((brew, index) => {
            
            return (
                <Brew 
                    key={index}     // used by React under the hood 
                    index={index}   // used by component to get brew data
                />
            );
        })
        
        return (
            
            <div className={classes.container}> 
                {this.state.isNewFermentationOpen ? <NewFermentationOverlay /> : null}
                {brewComponents}
                <AddButton clicked={this.openNewFermentationHandler}/>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        brews: state.postBrew.brews
    }
}

export default connect(mapStateToProps)(PostBrew);