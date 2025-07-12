import { useState } from "react";
import useMovies from "../Hooks/useMovies";
import Loader from "../components/Loader/Loader";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieList from "../components/MovieList/MovieList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorites } from "../Reducers/FavoritesSlice";


const Home = () => {
  const [query, setQuery] = useState("interstellar");
  const { movies, isLoading, error } = useMovies(query);
  const dispatch = useDispatch();

  const addFavoriteMovies = (movie) => {
    dispatch(addFavorites(movie));
  };

  const MovieComponent = isLoading ? (
    <Loader />
  ) : (
    <MovieList movies={movies} addFavoriteMovies={addFavoriteMovies} />
  );

  return (
    <div className="App">
      <Link to="/favorite-movies" className="special-btn">
        See all favorite movies
      </Link>
      <div className="home">
        <h1>Movie Database</h1>
        <SearchBar setQuery={setQuery} />
        {error ? <p>Failed to load movies</p> : MovieComponent}
      </div>
    </div>
  );
};

export default Home;
