import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './InputAdditionsAdd.module.css'

class InputAdditionsAdd extends Component {
    state = {
        name: null,
        type: null,
        amount: null,
        time: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.additionAdd(this.state);
    }

    render() {
        return (
            <Aux>
                <h2 className={classes.header}>Insert Addition</h2>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input className={classes.input} type='text' id='name' onChange={this.handleChange} required></input>
                    
                    <label htmlFor='type'>Type:</label>
                    <select className={classes.input} id='type' onChange={this.handleChange}>
                        <option value='hops'>Hops</option>
                        <option value='hops'>Malt</option>
                        <option value='hops'>Misc</option>
                    </select>
                    
                    <label htmlFor='amount'>Amount:</label>
                    <input className={classes.input} type='text' id='amount' onChange={this.handleChange} required></input>

                    <label htmlFor='time'>Time:</label>
                    <input className={classes.input} type='number' id='time' onChange={this.handleChange} required></input>

                    <input className={classes.submit} type='submit' value='Add'></input>
                </form>
            </Aux>
        );
    }
}

export default InputAdditionsAdd;