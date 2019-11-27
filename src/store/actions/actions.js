export const ADD_NEW_ADDITION = 'ADD_NEW_ADDITION';
export const DELETE_ADDITION = 'DELETE_ADDITION';
export const RESTART_BREW = 'RESTART_BREW';
export const RESTORE_FROM_STORAGE = 'RESTORE_FROM_STORAGE';
export const CLEAR_NEW_ADDITION = 'CLEAR_NEW_ADDITION';
export const NEW_ADDITION_UPDATE = 'NEW_ADDITION_UPDATE';
export const BOIL_MINS_ADJUST = 'BOIL_MINS_ADJUST';

export const addNewAddition = () => {
    return {
        type: ADD_NEW_ADDITION
    }
}

export const deleteAddition = (additionTime) => {
    return {
        type: ADD_NEW_ADDITION,
        additionTime: additionTime
    }
}

export const restartBrew = () => {
    return {
        type: RESTART_BREW
    }
}