import MovieList from "../components/MovieList/MovieList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorites } from "../Reducers/FavoritesSlice";
import './FavoriteMoviePage.css';

const FavoriteMoviePage = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorites);
  const removeFavoriteMovies = (movie) => dispatch(removeFavorites(movie));

  return (
    <div className="favorites-container">
      <Link to="/" className="special-btn">
        Back to HOME page
      </Link>
      <div className="favorites-header">
        <h1>❤️ Favorite Movies</h1>
        <p className="favorites-subtitle">Your handpicked collection</p>
      </div>
      <div className="home">
        <MovieList
          movies={favoriteMovies}
          removeFavoriteMovies={removeFavoriteMovies}
          showRemoveButton
        />
      </div>
    </div>
  );
};

export default FavoriteMoviePage;
