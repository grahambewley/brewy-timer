import React from 'react';
import '../Addition/Addition.css';

const addition = (props) => {

    let percentage = ((props.totalTime - props.time) / props.totalTime) * 100 + '%';
    console.log("Ingredient " + props.amount + " " + props.name + " going to " + percentage);

    const topPositioning = {
        top: percentage
    }

    return (
        <div style={topPositioning} className='addition'>
            <div className='symbol'></div>
            <p>{props.amount} {props.name}</p>
        </div>
    )
}

export default addition;