import React from 'react';
import './Start.css';
import { Link } from 'react-router-dom';

const Start = (props) => {

        
    return (
        <div className='wizardContainer'>
            <h1 className='startHeader'>Welcome to Brewy</h1>
            <h2 className='startSubhead'>Online Brew-Day Timer for Hobbyist Home Brewers</h2>
            <img src='../images/cheers.png' alt='Cheers logo' />
            <Link to='/boil'>
                <button className='startButton'>Let's get started</button>
            </Link>
        </div>
    );

}

export default Start;