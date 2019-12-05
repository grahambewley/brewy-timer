import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import brewImage from '../../../assets/beer.png';


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Brew Day Timer</NavigationItem>
        <NavigationItem link="/postbrew">Fermentation</NavigationItem>
    </ul>
);

export default navigationItems;