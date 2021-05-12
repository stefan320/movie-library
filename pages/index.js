import styles from "../styles/Home.module.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as actionTypes from "../store/actionTypes";
import * as actionCreator from "../store/actions";
import uniqid from "uniqid";
import FilterMenu from "../components/FilterMenu/FilterMenu";

const Home = (props) => {
  useEffect(() => {
    props.onPageInit();
  }, []);

  return (
    <>
      <FilterMenu
        inputChangedHandler={(filterName) => {
          console.log(props.sortByValue);
          props.filtersChanged(
            filterName,
            props.activeFilters,
            props.searchFilter,
            props.sortByValue
          );
        }}
        searchChangedHandler={(search) =>
          props.searchByString(search, props.activeFilters, props.sortByValue)
        }
        selectMenuHandler={(value) =>
          props.sortBy(value, props.displayedMovies)
        }
        sortByValue={props.sortByValue}
        // filters={props.filters}
      />
      <div className={styles.container}>
        {props.displayedMovies
          ? props.displayedMovies.map((movie) => (
              <div key={uniqid()}>
                <img src={movie.thumbnail} alt={movie.title} />
                <h2>{movie.title}</h2>
                <div>
                  <div>{movie.releaseDate}</div>
                  <div>{movie.rating}</div>
                  <div>{movie.genere}</div>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const movieData = {
    displayedMovies: state.displayedMovies,
    // filters: state.filters,
    activeFilters: state.activeFilters,
    searchFilter: state.searchFilterValue,
    sortByValue: state.sortBy,
  };
  return movieData;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPageInit: () => actionCreator.initMovieList(dispatch),

    filtersChanged: (changedFilter, filtersArr, searchString, sortByValue) =>
      dispatch(
        actionCreator.filterMovieList(
          changedFilter,
          filtersArr,
          searchString,
          sortByValue
        )
      ),

    searchByString: (string, activeFilters, sortByValue) =>
      dispatch(
        actionCreator.updateSearchResults(string, activeFilters, sortByValue)
      ),

    sortBy: (value, displayedMovies) =>
      dispatch(actionCreator.movieSorter(value, displayedMovies)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
