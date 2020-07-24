const initialState = {
    data: []
}

export const selectedMovieReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SELECTED_MOVIE': {
            return ({
                data: action.payload
            })
        }
        default: return state
    }
}