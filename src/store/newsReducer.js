import * as actionTypes from './action/actionTypes';


const initialState = {
    news: [],
    progress: '',
    user: null,
    loading: false,
    error: false
};

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                user: null
            };
        case actionTypes.FILE_UPLOAD:
            return {
                ...state,
              progress: action.progress
            };
        case actionTypes.NEWS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.NEWS_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case actionTypes.NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default newsReducer;