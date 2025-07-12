import { useState, useEffect } from "react";
import axios from "axios";

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://www.omdbapi.com/?apikey=3f788d21&s=${query}`)
      .then((response) => setMovies(response.data.Search))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [query]);

  return { movies, isLoading, error };
};

export default useMovies;
