import React from 'react';
import '../Addition/Addition.css';

const addition = (props) => {

    let percentage = ((props.boilMinutes - props.time) / props.boilMinutes) * 100 + '%';
    
    let additionStyle = {
        top: percentage
    }

    let additionTextStyle = {};
    let additionSymbolStyle = {};

    // TODO: Switch to using .offsetTop property of the DOM elements -- timer vs Addition
    // Get the amount of seconds elapsed for this addition
    let additionSeconds = props.boilMinutes*60 - props.time*60;
    
    if (Math.abs(additionSeconds - props.elapsedSeconds) <= 75) {
        additionTextStyle = {
            opacity: 0.3
        }
    } 

    switch(props.type) {
        case 'hops':
            additionSymbolStyle = { backgroundColor: '#288B64' };
            break;
        case 'malt':
            additionSymbolStyle = { backgroundColor: '#862201' };
            break;
        default :
            additionSymbolStyle = { backgroundColor: 'salmon'};
    }

    return (
        <div style={additionStyle} className='addition'>
            <div style={additionSymbolStyle} className='symbol'></div>
            <p style={additionTextStyle} className='details'>{props.amount} {props.name} <span className='time'>@ {props.time} MIN</span></p>
        </div>
    )
}

export default addition;