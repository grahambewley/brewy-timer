import React from 'react';
import './Options.scss';

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
            <button onClick={props.optFullscreen} className='option-button'><i className={fullscreenIcon}></i></button>
            <button onClick={props.optRestart} className='option-button'><i className="fas fa-undo"></i></button>
        </div>
    )
}

export default option;