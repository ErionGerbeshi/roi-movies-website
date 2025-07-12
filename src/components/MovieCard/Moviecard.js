import './Moviecard.css';

const MovieCard = (props) => {
  // Handle missing poster images
  const posterUrl = props.movie.Poster !== "N/A" 
    ? props.movie.Poster 
    : "https://via.placeholder.com/300x450?text=No+Poster";

  return (
    <div className="movie-item">
      <img src={posterUrl} alt={props.movie.Title} className="movie-poster" />
      <div className="movie-info-overlay">
        <h3 className="movie-title">{props.movie.Title}</h3>
        <p className="movie-year">{props.movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
