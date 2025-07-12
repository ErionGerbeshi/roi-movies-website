import { useState, useEffect } from "react";
import axios from "axios";
import MovieDetails from "../components/MovieDetails/Moviedetails";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://www.omdbapi.com/?i=${params.id}&apikey=3f788d21`)
      .then((response) => setMovie(response.data))
      .catch((error) => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error Loading the movie</h1>
      </div>
    );
  }

  return (
    <div className="movie-details-wrapper">
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MoviePage;
