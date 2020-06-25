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


export const addPost = (id, newPost) => {
    return dispatch => {
        axiosWithAuth()
        .post(`/story/${id}/story`, newPost)
        .then (res => {
            dispatch({
                type: 'ADD_POST',
                payload: res.data
            })
        })
        .catch(err => console.log(err))
    }
}

export const deletePost = postId => {
    return dispatch => {
        axiosWithAuth()
        .delete(`/story/${postId}`)
        .then (res => {
            axiosWithAuth()
            .get('/story')
            .then(res => 
                dispatch({
                    type: 'DELETE_POST',
                    payload: res.data
                }))
            .catch(err => console.log(err))
        })
    }
}

export const editPost = (postId, newPost) => {
    return dispatch => (
        axiosWithAuth()
        .put(`/story/${postId}`, newPost)
        .then( res => {
            axiosWithAuth()
            .get('/story')
            .then( res =>
                dispatch({
                    type: 'EDIT_POST',
                    payload: res.data
                }))
        })
    )
}