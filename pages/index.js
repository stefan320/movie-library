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

  // const inputChangedHandler = (filterOptions) => {
  //   // if checkbox is checked return the checkbox name else empty string
  //   const filter = filterOptions.value ? filterOptions.filterName : "";
  //   console.log(filter);
  // };
  return (
    <>
      <FilterMenu
        inputChangedHandler={(filterName) =>
          props.filtersChanged(filterName, props.activeFilters)
        }
        searchChangedHandler={(search) => props.searchByString(search)}
        selectMenuHandler={(value) => props.sortBy(value)}
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
  };
  return movieData;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPageInit: () => actionCreator.initMovieList(dispatch),
    filtersChanged: (changedFilter, filtersArr) =>
      dispatch(actionCreator.filterMovieList(changedFilter, filtersArr)),
    searchByString: (string) =>
      dispatch(actionCreator.updateSearchResults(string)),
    sortBy: (value) => dispatch(actionCreator.movieSorter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
