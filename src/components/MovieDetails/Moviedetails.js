import './Moviedetails.css';

const MovieDetails = (props) => {
  if (!props.movie) {
    return <h1>Loading Movie...</h1>;
  }

  return (
    <div className="movie-details-card">
      <div className="movie-details-poster">
        <img src={props.movie.Poster} alt={props.movie.Title} />
      </div>
      <div className="movie-details-info">
        <h1 className="movie-details-title">
          {props.movie.Title} <span className="movie-details-year">({props.movie.Year})</span>
        </h1>
        <div className="movie-details-genre">{props.movie.Genre}</div>
        <div className="movie-details-rating">
          <span>⭐ {props.movie.imdbRating}</span>
        </div>
        <div className="movie-details-meta">
          <p><strong>Director:</strong> {props.movie.Director}</p>
          <p><strong>Cast:</strong> {props.movie.Actors}</p>
          <p><strong>Runtime:</strong> {props.movie.Runtime}</p>
          <p><strong>Rated:</strong> {props.movie.Rated}</p>
        </div>
        <div className="movie-details-plot">
          <strong>Plot:</strong>
          <p>{props.movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
