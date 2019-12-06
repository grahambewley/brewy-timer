import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import brewImage from '../../../assets/kettle.svg';
import fermentationImage from '../../../assets/fermentation.svg';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
            <div className={classes.linkContainer}>
                <img src={brewImage} className={classes.icon} alt=''/>
                <span>Brew Day Timer</span>
            </div>
        </NavigationItem>
        <NavigationItem link="/postbrew">
            <div className={classes.linkContainer}>
                <img src={fermentationImage} className={classes.icon} alt=''/>
                <span>Fermentation</span>
            </div>
        </NavigationItem>
    </ul>
);

export default navigationItems;