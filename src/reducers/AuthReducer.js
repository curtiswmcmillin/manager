import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_INIT
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case LOGIN_USER_INIT:
            return { ...state, error: '', loading: true };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failed', password: '', loading: false };
        case LOGIN_USER_SUCCESS:
            return {
                ...state, 
                ...INITIAL_STATE,
                user: action.payload
            };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};
