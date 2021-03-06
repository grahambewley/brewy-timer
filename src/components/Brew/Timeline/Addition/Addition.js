import React from 'react';
import { connect } from 'react-redux';
import './Addition.scss';

const addition = (props) => {

    // Get a percentage based on this Addition's time vs. total boil minutes...
    let percentage = ((props.boilMins - props.time) / props.boilMins) * 100 + '%';
    // Position this Addition accordingly
    let additionStyle = {
        top: percentage
    }

    let additionTextStyle = {};
    let additionSymbolStyle = {};

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

    if(props.instructionMinutesDone !== null && props.time >= props.instructionMinutesDone) {
        additionTextStyle = {
            textDecoration: 'line-through',
            opacity: '0.5'
        }
    }

    const items = props.items.map((item) => {
        return <p key={item.name} style={additionTextStyle} className='details'>{item.amount} {item.name}</p>
    });

    return (
        <div style={additionStyle} className='addition' onClick={props.clicked}>
            <div style={additionSymbolStyle} className='symbol'></div>
            <div className='items'>
                {items}
            </div>
            <p className='time'>@ {props.time} MIN</p>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        boilMins: state.brew.boilMinutes
    }
}

export default connect(mapStateToProps)(addition);