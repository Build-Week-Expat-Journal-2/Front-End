import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const setLoggedState = response => {
    return dispatch => (
        dispatch({
            type: 'SET_LOGGED_STATE',
            payload: response
        })
    )
}

export const fetchPostData = () => {
    return dispatch => {
        axiosWithAuth()
        .get('/story')
        .then(res => {
            dispatch({
                type: 'FETCH_POST_DATA',
                payload: res.data
            })
        })
    }
}