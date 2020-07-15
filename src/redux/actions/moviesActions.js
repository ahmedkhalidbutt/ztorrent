import Axios from "axios";
import { MOVIES_LIST } from "../../Constants/apiConsts"
import {fetchMovie} from '../../Constants/actionConsts';

export const fetchMovies = () => dispatch => {
     Axios.get(MOVIES_LIST).then((res) => {
        if(res.data.status === "ok"){
         dispatch( {
            type: fetchMovie,
            payload: res.data.data.movies
        })
        }
      })
      .catch(error => {
          console.log("Error", error);
      })
}