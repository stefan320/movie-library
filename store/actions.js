import axios from "axios";
import * as actionTypes from "./actionTypes";

export const initMovieList = (dispatch) => {
  const key = "$2b$10$QTMZaMPzjv.J7fnQLPoQSOCkpB4W5lZ/cp4zX/CqZR6l3LZ1LzT.G";
  axios
    .get("https://api.jsonbin.io/v3/b/6093c87065b36740b92f4838/", {
      headers: {
        "X-Master-Key": key,
      },
    })
    .then((response) => {
      // handle success
      return dispatch(initPage(response.data.record));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  //   };
};

export const initPage = (movieDetails) => {
  return {
    type: actionTypes.FETCH_ALL_MOVIES,
    movieDetails,
  };
};
