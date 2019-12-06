import React from 'react';
import classes from './FermentationTimeline.module.scss';

const fermentationTimeline = (props) => {

    const colors = {
        'blue': '#1B98E0',
        'light-blue': '#5fb7e9',
        'dark-blue': '#136a9d',
        'orange': '#FF9F1C',
        'light-orange': '#ffbc60',
        'dark-orange': '#b36f14',
        'green': '#20BF55',
        'light-green': '#63d288',
        'dark-green': '#16863b'
    }

    console.log(props.stages);
    let totalDays = 0;

    // Get total duration in days
    props.stages.forEach(stage => {
        totalDays += stage.duration;
    });

    // Build linear gradient string
    let currentPercent = 0;
    let linearGradientString = 'linear-gradient(to right, ';

    props.stages.forEach(stage => {
        linearGradientString += (colors[stage.color] + ' ' + currentPercent.toString() + '%, ');
        currentPercent += parseFloat(((stage.duration/totalDays)*100));
        linearGradientString += (colors[stage.color] + ' ' + currentPercent.toString() + '%, ');
    });

    linearGradientString = linearGradientString.slice(0, -2);   // Splice off last comma and space
    linearGradientString += ')';                                // Add closing paren
    
    const timelineStyle = {
        background: linearGradientString
    }

    currentPercent = 0;
    const tickmarks = props.stages.map((stage,index) => {
        let tickStyle = {
            left: currentPercent+'%'
        }
        currentPercent += parseFloat(((stage.duration/totalDays)*100));
        return (
            <div key={index} style={tickStyle} className={classes.timelineTick}>
                <span className={classes.timelineTick__name}>{stage.shortname}</span>
                <span className={classes.timelineTick__duration}>{stage.duration}d</span>
            </div>
        );
    })

    return (
        <div style={timelineStyle} className={classes.container}>
            {tickmarks}
        </div>
    );
}

export default fermentationTimeline;