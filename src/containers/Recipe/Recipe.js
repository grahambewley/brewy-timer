import React from 'react';
import { Link } from 'react-router-dom';
import InputBoilMinutes from '../../components/InputBoilMinutes/InputBoilMinutes';
import InputAdditions from '../../components/InputAdditions/InputAdditions';

import classes from './Recipe.module.scss';

const Recipe = (props) => {

    return ( 
        <div className={classes.container}>
            <div className={classes.header}>
                <Link to='/'>
                    <button className={classes.button}><i className="fas fa-chevron-left"></i></button>
                </Link>
                <h1 className={classes.headerText}>Your Brew</h1>
            </div>
            <InputBoilMinutes
                boilMins={props.boilMinutes}
                boilMinus={props.boilMinus}
                boilPlus={props.boilPlus}
            />
            <InputAdditions
                additionAdd={props.additionAdd}
                additionDelete={props.additionDelete}
                additions={props.additions}
            />
        </div>
    );
    
}

export default Recipe;