import axios from "axios";
import * as actionTypes from "./actionTypes";
import { mergeArrays } from "../utilities/utilities";

let allMovies = null;

const sortMovies = (moviesArr, sortBy, order = "decending") => {
  //Recives an array and sort the items according to sortBy parameter
  // IMPORTANT: SortBy value parameter should be The name of propery in the Array ie. title / rating
  const sortedMovies = moviesArr.sort((a, b) => a[sortBy] - b[sortBy]);
  if (order === "decending") {
    return sortedMovies.reverse();
  } else {
    return sortedMovies;
  }
};

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
      allMovies = response.data.record;
      const topRatedMovies = () => sortMovies(allMovies, "rating");
      const topEightMovies = () => topRatedMovies().slice(0, 8);
      return dispatch(initPage(topEightMovies()));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  //   };
};

export const initPage = (topEightMovies) => {
  return {
    type: actionTypes.INIT_APP,
    topEightMovies,
  };
};

export const filterMovieList = (filter, filtersArr) => {
  // Check if clicked filter is already in the arr
  const filteredArray = (filtersArr, filter) => {
    return filtersArr.includes(filter.toLowerCase()) // if yes remove it
      ? filtersArr.filter((filterItem) => filterItem != filter.toLowerCase())
      : //else add it
        filtersArr.concat(filter.toLowerCase());
  };
  // recives an array with filters ie [crime, drama] and an array  with all movies
  // if there are filters it will return an array with an array for each filter with matches ie. [[...crimeMovies],[...dramMovies]]
  const filteredMovies = (filtersArr, allMovies) => {
    if (filtersArr.length > 0) {
      return filtersArr.map((filter) => {
        return allMovies.filter(
          (movie) => movie.genere.toLowerCase() === filter
        );
      });
    } else {
      return allMovies;
    }
  };

  const updatedFiltersArr = filteredArray(filtersArr, filter);
  const updatedDisplayedMovies = mergeArrays(
    filteredMovies(updatedFiltersArr, allMovies)
  );
  return updateFiltersResults(updatedFiltersArr, updatedDisplayedMovies);
};

const updateFiltersResults = (updatedFiltersArr, updatedDisplayedMovies) => {
  return {
    type: actionTypes.FILTER_CHANGED,
    filtersArr: updatedFiltersArr,
    displayedMovies: updatedDisplayedMovies,
  };
};

export const updateSearchResults = (searchRes) => {
  return {
    type: actionTypes.SEARCH_CHANGED,
    displayedMovies: allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchRes.toLowerCase())
    ),
  };
};

export const movieSorter = (sortBy) => {
  console.log(sortBy);
  return {
    type: actionTypes.SORT_MOVIES,
    displayedMovies: sortMovies(allMovies, sortBy),
  };
};
