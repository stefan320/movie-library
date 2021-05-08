import * as actionTypes from "./actionTypes";

const initialState = {
  // allMovies: null,
  displayedMovies: null,
  query: "",
  filters: {
    action: false,
    animation: false,
    comedy: false,
    crime: false,
    drama: false,
    other: false,
    search: "",
  },
  activeFilters: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_APP:
      return {
        ...state,
        // allMovies: action.movieDetails,
        displayedMovies: action.topEightMovies,
      };

    case actionTypes.FILTER_CHANGED:
      return {
        ...state,
        activeFilters: [...action.filtersArr],
        displayedMovies: [...action.displayedMovies],
      };

    case actionTypes.SEARCH_CHANGED:
      return {
        ...state,
        ...state.activeFilters,
        displayedMovies: [...action.displayedMovies],
      };
    case actionTypes.SORT_MOVIES:
      return {
        ...state,
        ...state.activeFilters,
        displayedMovies: [...action.displayedMovies],
      };
    default:
      return state;
  }
};

export default moviesReducer;
