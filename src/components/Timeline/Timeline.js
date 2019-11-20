import React from 'react';
import { connect } from 'react-redux';
import './Timeline.scss';
import Addition from './Addition/Addition';

const Timeline = (props) => {

    const boilSeconds = props.boilMins*60;
    const percentage = 100 - ((boilSeconds - props.elapsedSeconds) / boilSeconds) * 100 + '%';
    const linearGradientString = 'linear-gradient(to bottom, #a9d1c1 '+percentage+', #eee '+percentage+' 100%)';
    const timelineStyle = {
        background: linearGradientString
    }

    const additionComponents = Object.keys(props.adds).map((additionTime, index) => {
        return (
            <Addition 
                clicked={() => props.additionTap(additionTime)}
                key={index}
                elapsedSeconds={props.elapsedSeconds} 
                time={additionTime}
                items={props.adds[additionTime]} 
                instructionMinutesDone={props.instructionMinutesDone}/>
        );
    });

    return (
        <div className='timelineContainer'>
            <div style={timelineStyle} className='timeline'>
                {additionComponents}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        adds: state.additions,
        boilMins: state.boilMinutes
    };
}

export default connect(mapStateToProps)(Timeline);