import React from 'react';
import './Timeline.css';
import Addition from '../Addition/Addition';
//import CurrentTime from '../CurrentTime/CurrentTime';

const Timeline = (props) => {
    const additionComponents = props.additions.map(add => {
        return(<Addition elapsedSeconds={props.elapsedSeconds} boilMinutes={props.boilMinutes} time={add[0]} type={add[1]} amount={add[2]} name={add[3]}/>);
    })

    return (
        <div className='timelineContainer'>
            <div className='timeline'>
                {additionComponents}
            </div>
        </div>
    )
}

export default Timeline;