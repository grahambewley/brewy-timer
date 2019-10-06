import React from 'react';
import './Addition.scss';

const addition = (props) => {

    // Get a percentage based on this Addition's time vs. total boil minutes...
    let percentage = ((props.boilMinutes - props.time) / props.boilMinutes) * 100 + '%';
    // Position this Addition accordingly
    let additionStyle = {
        top: percentage
    }

    let additionTextStyle = {};
    let additionSymbolStyle = {};

    if(props.done === true) {
        additionTextStyle = {
            textDecoration: 'line-through',
            opacity: '0.5'
        }
    }

    // TODO: Instead of styling based on the first item in this addition, allow for mixed-style timeline symbols
    switch(props.items[0].type) {
        case 'hops':
            additionSymbolStyle = { backgroundColor: '#288B64' };
            break;
        case 'malt':
            additionSymbolStyle = { backgroundColor: '#862201' };
            break;
        default :
            additionSymbolStyle = { backgroundColor: 'salmon'};
    }

    const items = props.items.map((item) => {
        return <p style={additionTextStyle} className='details'>{item.amount} {item.name}</p>
    });

    return (
        <div style={additionStyle} className='addition'>
            <div style={additionSymbolStyle} className='symbol'></div>
            <div className='items'>
                {items}
            </div>
            <p style={additionTextStyle} className='details'>{props.amount} {props.name} <span className='time'>@ {props.time} MIN</span></p>

        </div>
    )
}

export default addition;