const initialState = {
    additions: {}
}

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_NEW_ADDITION') {
        console.log('[reducer.js] action = ', action);

        // Immutably copy the current state.additions
        let additionsCopy = Object.assign({}, state.additions);

        if(additionsCopy[action.newAddition.time] !== undefined) {
            additionsCopy[action.newAddition.time].push(action.newAddition);
        } else {
            additionsCopy[action.newAddition.time] = [];
            additionsCopy[action.newAddition.time].push(action.newAddition);
        }
        console.log('[reducer.js] new additions = ',additionsCopy);

        return {
            ...state,
            additions: {
                ...state.additions,
                ...additionsCopy
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
            }
        } 
    }
    
    return state;
};

export default reducer;