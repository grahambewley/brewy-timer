export const ADD_NEW_ADDITION = 'ADD_NEW_ADDITION';
export const DELETE_ADDITION = 'DELETE_ADDITION';
export const RESTART_BREW = 'RESTART_BREW';
export const RESTORE_FROM_STORAGE = 'RESTORE_FROM_STORAGE';
export const CLEAR_NEW_ADDITION = 'CLEAR_NEW_ADDITION';
export const NEW_ADDITION_UPDATE = 'NEW_ADDITION_UPDATE';
export const BOIL_MINS_ADJUST = 'BOIL_MINS_ADJUST';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export const addNewAddition = () => {
    return {
        type: ADD_NEW_ADDITION
    }
}

export const deleteAddition = (additionTime) => {
    return {
        type: DELETE_ADDITION,
        additionTime: additionTime
    }
}

export const restartBrew = () => {
    return {
        type: RESTART_BREW
    }
}

export const restoreFromStorage = (additions, boilMinutes) => {
    return {
        type: RESTORE_FROM_STORAGE,
        additions: additions,
        boilMinutes: boilMinutes
    }
}

export const clearNewAddition = () => {
    return {
        type: CLEAR_NEW_ADDITION
    }
}

export const newAdditionUpdate = (newAdd) => {
    return {
        type: NEW_ADDITION_UPDATE,
        new: newAdd
    }
}

export const boilMinsAdjust = (adjustment) => {
    return {
        type: BOIL_MINS_ADJUST,
        adjustment: adjustment
    }
}

// USER SIGNUP / SIGNIN

export const authenticateUser = (authUser) => {
    return {
        type: AUTHENTICATE_USER,
        authUser: authUser
    }
}

export const signOutUser = () => {
    return {
        type: SIGN_OUT_USER
    }
}