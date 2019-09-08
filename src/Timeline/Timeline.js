import React from 'react';
import './Timeline.css';
import Addition from '../Addition/Addition';

const Timeline = (props) => {
    console.log(props);

    const additionComponents = props.additions.map(add => {
        return(<Addition totalTime={props.totalTime} time={add[0]} amount={add[2]} name={add[3]}/>);
    })

    return (
        <div className='timeline'>
            {additionComponents}
        </div>
    )
}

export default Timeline;