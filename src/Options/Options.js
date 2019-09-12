import React from 'react';
import './Options.css';

const option = (props) => {

    return (
        <div className='optionsContainer'>
            <button className='option-button'><i className="fas fa-undo option-icon"></i></button>
            <button onClick={props.full} className='option-button'><i className="far fa-window-maximize"></i></button>
            <button className='option-button'><i className="fas fa-bars option-icon"></i></button>
        </div>
    )
}

export default option;