import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/PostBrew/Header/Header';

class PostBrew extends Component {
    
    
    render() {
        console.log("Brews from redux ", this.props.brews);
        return (
            <Header />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        brews: state.postBrew.brews
    }
}

export default connect(mapStateToProps)(PostBrew);