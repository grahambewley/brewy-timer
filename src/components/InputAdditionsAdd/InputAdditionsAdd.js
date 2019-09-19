import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './InputAdditionsAdd.module.scss'

class InputAdditionsAdd extends Component {
    state = {
        name: null,
        type: 'hops',
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
        document.getElementById('additionAddForm').reset();
        this.props.additionAdd(this.state);
    }

    render() {
        return (
            <Auxi>
                <h2 className={classes.header}>Insert Addition</h2>
                <form autocomplete='off' id='additionAddForm' className={classes.form} onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input className={classes.input} type='text' id='name' onChange={this.handleChange} required></input>
                    
                    <label htmlFor='type'>Type:</label>
                    <select className={classes.input} id='type' onChange={this.handleChange}>
                        <option default value='hops'>Hops</option>
                        <option value='malt'>Malt</option>
                        <option value='misc'>Misc</option>
                    </select>
                    
                    <label htmlFor='amount'>Amount:</label>
                    <input className={classes.input} type='text' id='amount' onChange={this.handleChange} required></input>

                    <label htmlFor='time'>Time:</label>
                    <input className={classes.input} type='number' id='time' onChange={this.handleChange} required></input>

                    <input className={classes.submit} type='submit' value='Add'></input>
                </form>
            </Auxi>
        );
    }
}

export default InputAdditionsAdd;