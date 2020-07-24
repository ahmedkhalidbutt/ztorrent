import {selectedMovie} from '../../Constants/actionConsts';

export const addSelected = (movie, url) => dispatch => {
         dispatch( {
            type: selectedMovie,
            payload: {
                movie,
                url
            }
        })
        
}