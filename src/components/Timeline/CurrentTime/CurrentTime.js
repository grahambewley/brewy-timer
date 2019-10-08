import React from 'react';
import './CurrentTime.scss';

const timer = (props) => {

    let displayMinutes = Math.floor(props.elapsedSeconds / 60);
    displayMinutes = ('0' + displayMinutes).slice(-2);
    var displaySeconds = props.elapsedSeconds - displayMinutes * 60;
    displaySeconds = ('0' + displaySeconds).slice(-2);

    let percentage = 100 - ((props.totalSeconds - props.elapsedSeconds) / props.totalSeconds) * 100 + '%';

    const topPositioning = {
        top: percentage
    }

    return (
        <div className='timerLine'>
            <div style={topPositioning} className='timerContainer' id='timer'>
                <p className='timer'>{displayMinutes}:{displaySeconds}</p>
                <div className='timerDash'></div>    
            </div>
        </div>
    )
}   

export default timer;