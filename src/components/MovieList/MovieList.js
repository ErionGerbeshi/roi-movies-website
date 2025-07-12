import React from "react";
import "./MovieList.css";

import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/Moviecard";

const MovieList = (props) => {
  if (props.movies && props.movies.length === 0) {
    return (
      <div className="movie-list">
        <p>No movies found. Please search for a movie.</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {props.movies.map((movie) => {
        return (
          <div>
            {props.showRemoveButton ? (
              <button onClick={() => props.removeFavoriteMovies(movie)}>
                Remove -
              </button>
            ) : (
              <button onClick={() => props.addFavoriteMovies(movie)}>
                Add +
              </button>
            )}
            <Link to={`/movie/${movie.imdbID}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default MovieList;
