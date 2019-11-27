import * as actionTypes from '../actions';

const initialState = {
    additions: {},
    boilMinutes: 60,
    newAddition: {
        name: null,
        type: null,
        amount: null,
        time: null
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_NEW_ADDITION:
            console.log('[reducer.js] action = ', action);

            // Immutably copy the current state.additions
            let additionsCopy = Object.assign({}, state.additions);

            if(additionsCopy[state.newAddition.time] !== undefined) {
                additionsCopy[state.newAddition.time].push(state.newAddition);
            } else {
                additionsCopy[state.newAddition.time] = [];
                additionsCopy[state.newAddition.time].push(state.newAddition);
            }
            console.log('[reducer.js] new additions = ', additionsCopy);

            return {
                ...state,
                additions: {
                    ...state.additions,
                    ...additionsCopy
                },
                newAddition: {
                    name: null,
                    type: null,
                    amount: null,
                    time: null
                }
            }

        case actionTypes.DELETE_ADDITION:
            console.log('[reducer.js] action = ', action);
            let delAdditionsCopy = Object.assign({}, state.additions);

            delete delAdditionsCopy[action.additionTime];
            console.log('[reducer.js] new additions = ',delAdditionsCopy);

            return {
                ...state,
                additions: {
                    ...delAdditionsCopy
                },
                newAddition: {
                    ...state.newAddition
                }
            }
        case actionTypes.RESTART_BREW:
            return initialState;
        
        case actionTypes.RESTORE_FROM_STORAGE:
            return {
                ...state,
                additions: {
                    ...action.additions
                },
                boilMinutes: +action.boilMinutes,
                newAddition: {
                    ...state.newAddition
                }
            } 
        case actionTypes.CLEAR_NEW_ADDITION:
            return {
                ...state,
                additions: {
                    ...state.additions
                },
                newAddition: {
                    name: null,
                    type: null,
                    amount: null,
                    time: null
                }
            }

        case actionTypes.NEW_ADDITION_UPDATE:
            return {
                ...state,
                additions: {
                    ...state.additions
                },
                newAddition: {
                    name: action.new.name,
                    type: action.new.type,
                    amount: action.new.amount,
                    time: parseInt(action.new.time)
                }
            }

        case actionTypes.BOIL_MINS_ADJUST:
            console.log('[reducer] Boil Minutes Adjustment of ', action.adjustment);
            let mins = state.boilMinutes;
            mins += action.adjustment;
    
            return {
                ...state,
                additions: {
                    ...state.additions
                },
                boilMinutes: mins,
                newAddition: {
                    ...state.newAddition
                }
            }
        
        default:
            return state;
    }
};

export default reducer;