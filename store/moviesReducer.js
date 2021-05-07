import * as actionTypes from "./actionTypes";

const initialState = {
  displayedMovies: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_MOVIES:
      return {
        ...state,
        displayedMovies: action.movieDetails,
      };
    default:
      return state;
  }
};

export default moviesReducer;
