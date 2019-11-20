const initialState = {
    additions: {},
    newAddition: {
        name: null,
        type: null,
        amount: null,
        time: null
    }
}

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_NEW_ADDITION') {
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
    }
    if(action.type === 'DELETE_ADDITION') {
        console.log('[reducer.js] action = ', action);
        let additionsCopy = Object.assign({}, state.additions);

        delete additionsCopy[action.additionTime];
        console.log('[reducer.js] new additions = ',additionsCopy);

        return {
            ...state,
            additions: {
                ...additionsCopy
            },
            newAddition: {
                ...state.newAddition
            }
        }
    }
    if(action.type === 'RESTART_BREW'){
        return initialState;
    }
    if(action.type === 'RESTORE_FROM_STORAGE') {
        return {
            ...state,
            additions: {
                ...action.additions
            },
            newAddition: {
                ...state.newAddition
            }
        } 
    }
    if(action.type === 'CLEAR_NEW_ADDITION') {
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
    }
    if(action.type === 'NEW_ADDITION_UPDATE') {
        console.log('[reducer] Before updating, newAddition is: ', state.newAddition);
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
    }
    return state;
};

export default reducer;