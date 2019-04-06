import * as actionTypes from './actionTypes';
import axios from '../../axios-news';


export const getUserAuth = user => {
  return {type: actionTypes.USER_LOGIN, user};
};

export const setUserLogout = () => {
    return {type: actionTypes.USER_LOGOUT};
};

export const uploadProgress = progress => {
    return {type: actionTypes.FILE_UPLOAD, progress};
};


export const newsRequest = () => {
    return {type: actionTypes.NEWS_REQUEST};
};

export const newsSuccess = () => {
    return {type: actionTypes.NEWS_SUCCESS};
};

export const newsError = () => {
    return {type: actionTypes.NEWS_ERROR};
};

export const createNews = news => {
    return dispatch => {
        dispatch(newsRequest());
        axios.post('/news.json', news).then(
            response => dispatch(newsSuccess()),
            error => dispatch(newsError())
        )
    }
};