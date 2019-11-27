import React from 'react';
import { connect } from 'react-redux';
import './CurrentTime.scss';

const timer = (props) => {

    let displayMinutes = Math.floor(props.elapsedSeconds / 60);
    displayMinutes = ('0' + displayMinutes).slice(-2);
    var displaySeconds = props.elapsedSeconds - displayMinutes * 60;
    displaySeconds = ('0' + displaySeconds).slice(-2);

    const totalSeconds = props.boilMins*60;
    let percentage = 100 - ((totalSeconds - props.elapsedSeconds) / totalSeconds) * 100 + '%';

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

const mapStateToProps = state => {
    return {
        boilMins: state.brew.boilMinutes
    }
}

export default connect(mapStateToProps)(timer);