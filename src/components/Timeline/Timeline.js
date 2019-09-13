import React from 'react';
import './Timeline.css';
import Addition from '../Addition/Addition';

const Timeline = (props) => {

    const boilSeconds = props.boilMinutes*60;
    const percentage = 100 - ((boilSeconds - props.elapsedSeconds) / boilSeconds) * 100 + '%';
    const linearGradientString = 'linear-gradient(to bottom, #a9d1c1 '+percentage+', #eee '+percentage+' 100%)';
    const timelineStyle = {
        background: linearGradientString
    }

    const additionComponents = props.additions.map(add => {
        return (
            <Addition 
                elapsedSeconds={props.elapsedSeconds} 
                boilMinutes={props.boilMinutes} 
                time={add.time} 
                type={add.type} 
                amount={add.amount} 
                name={add.name}
                done={add.done} />
        );
    })

    return (
        <div className='timelineContainer'>
            <div style={timelineStyle} className='timeline'>
                {additionComponents}
            </div>
            {props.play ? null : <button onClick={props.timerStart} className="timelineStart">Start Timer</button>}
        </div>
    )
}

export default Timeline;