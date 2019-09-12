import React from 'react';
import './Timeline.css';
import Addition from '../Addition/Addition';
//import CurrentTime from '../CurrentTime/CurrentTime';

const Timeline = (props) => {
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
            <div className='timeline'>
                {additionComponents}
            </div>
        </div>
    )
}

export default Timeline;