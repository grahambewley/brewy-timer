import React, { Component } from 'react';
import { connect } from 'react-redux';
import Brew from '../../components/PostBrew/Brew/Brew';
import classes from './PostBrew.module.scss';
class PostBrew extends Component {
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
                {brewComponents}
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