import * as actionTypes from '../actions/actions';

const initialState = {
    authUser: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                authUser: {
                    ...state.authUser,
                    ...action.authUser.user    
                }
            };

        case actionTypes.SIGN_OUT_USER:
            return initialState;
        default:
            return state;
    }
}

export default reducer;