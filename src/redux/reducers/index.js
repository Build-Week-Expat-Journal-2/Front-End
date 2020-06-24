const initialState = {
    isLogged: false,
    isFetching: true,
    postData: []
}

export const globalReducer = (state = initialState, action) => {

    switch(action.type){
        case 'SET_LOGGED_STATE':
            return {
                ...state,
                isLogged: action.payload
            }
        case 'FETCH_POST_DATA':
            return {
                ...state,
                postData: action.payload,
                isFetching: false
            }
        case 'ADD_POST':
            return {
                ...state,
                fetchPostData: [...state.fetchPostData, action.payload]
            } 
        case 'DELETE_POST':
            return {
                ...state,
                fetchPostData: action.payload
            }
        case 'EDIT_POST':
            return {
                ...state,
                fetchPostData: action.payload
            }               
            default:
                return state
        }
    }