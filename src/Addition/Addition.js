import React from 'react';
import '../Addition/Addition.css';

const addition = (props) => {

    const marTop = props.time*5 + 'px';

    const styleMarginTop = {
        marginTop: marTop
    }

    return (
        <div className='addition' style={styleMarginTop}>
            <div className='symbol'></div>
            <p>{props.amount} {props.name}</p>
        </div>
    )
}

export default addition;