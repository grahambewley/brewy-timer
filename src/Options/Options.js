import React from 'react';
import './Options.css';

const option = (props) => {

    let fullscreenIcon = '';
    // Set fullscreen icon based on current state full: true/false
    if(props.full === true) {
        fullscreenIcon = 'fas fa-compress'
    } else {
        fullscreenIcon = 'fas fa-expand'
    }
 
    return (
        <div className='optionsContainer'>
            <button onClick={props.fullscreenClick} className='option-button'><i className={fullscreenIcon}></i></button>
            <button onClick={props.restartClick} className='option-button'><i className="fas fa-undo"></i></button>
            <button className='option-button'><i className="fas fa-bars"></i></button>
        </div>
    )
}

export default option;