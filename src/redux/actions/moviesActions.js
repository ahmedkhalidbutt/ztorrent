import Axios from "axios";
import { MOVIES_LIST } from "../../Constants/apiConsts";

export const fetchMovies = () => dispatch => {
     Axios.get(MOVIES_LIST).then((res) => {
        if(res.data.status === "ok"){
         dispatch( {
            type: 'FETCH_MOVIES',
            payload: res.data.data.movies
        })
        }
      })
      .catch(error => {
          console.log("Error", error);
      })
}