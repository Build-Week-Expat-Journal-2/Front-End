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
            default:
                return state
        }
    }