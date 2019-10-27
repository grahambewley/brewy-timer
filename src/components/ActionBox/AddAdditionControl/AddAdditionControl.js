import React, { Component } from 'react';
import classes from './AddAdditionControl.module.scss';

class AddAdditionControl extends Component {

    state = {
        name: '',
        type: 'hops',
        amount: '',
        time: ''
    }

    handleChange = (e) => {
        this.setState(
            {[e.target.id]: e.target.value}, 
            () => this.props.newAdditionUpdate(this.state)
        );
    }

    render() {
        return (
            <div className={classes.box}>
                <label className={classes.label} htmlFor='type'>Type:</label>
                <select className={classes.input} id='type' onChange={this.handleChange}>
                    <option default value='hops'>Hops</option>
                    <option value='malt'>Malt</option>
                    <option value='misc'>Misc</option>
                </select>

                <label className={classes.label} htmlFor='name'>Name:</label>
                <input className={classes.input} type='text' id='name' onChange={this.handleChange} autoComplete="off" placeholder='e.g. "Centennial"'></input>
                
                <label className={classes.label} htmlFor='amount'>Amount:</label>
                <input className={classes.input} type='text' id='amount' onChange={this.handleChange} autoComplete="off" placeholder='e.g. "1 oz"'></input>

                <label className={classes.label} htmlFor='time'>Addition Time:</label>
                <div>
                    <input className={classes.input} type='number' id='time' onChange={this.handleChange} autoComplete="off"></input>
                    <span className={classes.minutesSpan}>minutes</span>
                </div>
            </div>
        )
    }
}

export default AddAdditionControl;