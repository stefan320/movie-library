const initialState = {
  topEightMovies: [{ id: 51 }],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 3:
      return state;
    default:
      return state;
  }
};

export default moviesReducer;
