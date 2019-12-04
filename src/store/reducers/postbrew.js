import * as actionTypes from '../actions/actions';

const initialState = {
    defaultStages: [
        {
            name: 'Primary Fermentation',
            duration: 21,
            color: 'orange'
        },
        {
            name: 'Secondary Fermentation',
            duration: 7,
            color: 'light-orange'
        },
        {   name: 'Barrel Aging',
            duration: 30,
            color: 'dark-orange'
        },
        {
            name: 'Cold Crash',
            duration: 3,
            color: 'blue'
        },
        {
            name: 'Bottle Conditioning',
            duration: 14,
            color: 'green'
        },
        {
            name: 'Carbonation',
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
                    duration: 21,
                    color: 'orange'
                },
                { 
                    order: 2,
                    name: 'Secondary Fermentation',
                    duration: 7,
                    color: 'light-orange'
                },
                {
                    order: 3,
                    name: 'Carbonation',
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
                    duration: 21,
                    color: 'orange'
                },
                { 
                    order: 2,
                    name: 'Secondary Fermentation',
                    duration: 7,
                    color: 'light-orange'
                },
                {
                    order: 3,
                    name: 'Carbonation',
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
                    duration: 14,
                    color: 'orange'
                },
                { 
                    order: 14,
                    name: 'Secondary Fermentation',
                    duration: 7,
                    color: 'light-orange'
                },
                {
                    order: 3,
                    name: 'Carbonation',
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