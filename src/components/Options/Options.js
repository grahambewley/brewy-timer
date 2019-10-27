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
 
    /*
    const requestNotification = () => {
        console.log("Requesting Notification permissions");
        Notification.requestPermission(function(status) {
            console.log('Notification permission status: ', status);
        });
    }
    */

    return (
        <div className='optionsContainer'>
            <button onClick={props.optFullscreen} className='option-button'><i className={fullscreenIcon}></i></button>
            <button onClick={props.optRestart} className='option-button'><i className="fas fa-undo"></i></button>
            {/*<button onClick={() => requestNotification()} className='option-button'><i className="far fa-bell"></i></button>*/}
        </div>
    )
}

export default option;