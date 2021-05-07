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
      <FilterMenu />
      <div className={styles.container}>
        {props.displayedMovies
          ? props.displayedMovies
              // .filter((movie) =>
              //   ["action", "crime"].includes(movie.genere.toLowerCase())
              // )
              .map((movie) => (
                <div key={uniqid()}>
                  <img src={movie.thumbnail} alt={movie.title} />
                  <h2>{movie.title}</h2>
                  <div>
                    <span>({movie.releaseDate})</span>
                    <span>{movie.rating}</span>
                    <span>{movie.genere}</span>
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
  const movies = {
    displayedMovies: state.displayedMovies,
  };
  return movies;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPageInit: () => actionCreator.initMovieList(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
