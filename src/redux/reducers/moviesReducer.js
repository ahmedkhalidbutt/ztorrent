const initialState = {
    data: []
}

export const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_MOVIES': {
            return ({
                data: action.payload
            })
        }
        default: return state
    }
}