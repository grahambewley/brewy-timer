//import * as actionTypes from '../actions/actions';

const initialState = {
    defaultStages: [
        {
            name: 'Primary Fermentation',
            shortname: 'Primary',
            duration: 21,
            color: 'orange'
        },
        {
            name: 'Secondary Fermentation',
            shortname: 'Secondary',
            duration: 7,
            color: 'light-orange'
        },
        {   name: 'Barrel Aging',
            shortname: 'Age',
            duration: 30,
            color: 'dark-orange'
        },
        {
            name: 'Cold Crash',
            shortname: 'Crash',
            duration: 3,
            color: 'blue'
        },
        {
            name: 'Bottle Conditioning',
            shortname: 'Condition',
            duration: 14,
            color: 'green'
        },
        {
            name: 'Carbonation',
            shortname: 'Carb',
            duration: 7,
            color: 'light-green'
        }
    ],
    brews: [
        {
            name: 'Extra IPA (Hop Rotator Series)',
            startDate: 1575262800,       //Epoch time for midnight on brew day
            origGravity: '1.074',
            stages: [
                {
                    order: 1,
                    name: 'Primary Fermentation',
                    shortname: 'Primary',
                    duration: 21,
                    color: 'orange'
                },
                { 
                    order: 2,
                    name: 'Secondary Fermentation',
                    shortname: 'Secondary',
                    duration: 7,
                    color: 'light-orange'
                },
                {
                    order: 3,
                    name: 'Carbonation',
                    shortname: 'Carb',
                    duration: 2,
                    color: 'light-green'
                }
            ]
        },
        {
            name: 'Imperial Nut Brown',
            startDate: 1575158400,       //Epoch time for brew day
            origGravity: '1.070',
            stages: [
                {
                    order: 1,
                    name: 'Primary Fermentation',
                    shortname: 'Primary',
                    duration: 21,
                    color: 'orange'
                },
                { 
                    order: 2,
                    name: 'Secondary Fermentation',
                    shortname: 'Secondary',
                    duration: 7,
                    color: 'light-orange'
                },
                {
                    order: 3,
                    name: 'Carbonation',
                    shortname: 'Carb',
                    duration: 2,
                    color: 'light-green'
                }
            ]
        },
        {
            name: 'Fresh Squished IPA',
            startDate: 1575158400,       //Epoch time for brew day
            origGravity: null,
            stages: [
                {
                    order: 1,
                    name: 'Primary Fermentation',
                    shortname: 'Primary',
                    duration: 14,
                    color: 'orange'
                },
                { 
                    order: 14,
                    name: 'Secondary Fermentation',
                    shortname: 'Secondary',
                    duration: 7,
                    color: 'light-orange'
                },
                {
                    order: 3,
                    name: 'Carbonation',
                    shortname: 'Carb',
                    duration: 2,
                    color: 'light-green'
                }
            ]
        }

    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default reducer;