import React from 'react';
import './CurrentTime.css';

const timer = (props) => {

    let minutes = Math.floor(props.elapsedSeconds / 60);
    var seconds = props.elapsedSeconds - minutes * 60;

    let percentage = 100 - ((props.totalSeconds - props.elapsedSeconds) / props.totalSeconds) * 100 + '%';

    const topPositioning = {
        top: percentage
    }

    return (
        <div style={topPositioning} className= 'timer' id='timer'>
            <div className='timerDash'></div> 
            <p>{minutes} <span className='timerLabel'>min</span> {seconds} <span className='timerLabel'>sec</span></p>
        </div>
    )
}   

export default timer;