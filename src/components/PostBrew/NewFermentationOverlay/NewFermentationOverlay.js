import React, { Component } from 'react';
import classes from  './NewFermentationOverlay.module.scss';
import Aux from '../../../hoc/Auxi';
import Backdrop from '../../UI/Backdrop/Backdrop';

class newFermentationOverlay extends Component {

    state = {
        name: null,
        shortname: null,
        duration: null,
        color: null
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        return (
            <Aux>
                <Backdrop show />
                <div className={classes.container}>
                   <h2>Add Fermentation</h2>
                    <form className={classes.form}>

                    </form>
                </div>
            </Aux>
        );
    }
} 

export default newFermentationOverlay;
