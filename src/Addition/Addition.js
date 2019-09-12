import React from 'react';
import '../Addition/Addition.css';

const addition = (props) => {

    // Get a percentage based on this Addition's time vs. total boil minutes...
    let percentage = ((props.boilMinutes - props.time) / props.boilMinutes) * 100 + '%';
    // Position this Addition accordingly
    let additionStyle = {
        top: percentage
    }

    // TODO: Use this to add strikethrough to additions that have been used already
    let additionTextStyle = {};
    let additionSymbolStyle = {};

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