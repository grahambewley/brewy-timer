import React, { useEffect } from 'react';

import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = ( props ) => {

    useEffect(() => {

    });

    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;