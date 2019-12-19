import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://image.tmdb.org/t/p/w500";


const Movie = ({ movie }) => {
  const poster = `${DEFAULT_PLACEHOLDER_IMAGE}${movie.poster_path}`;
  return (
    <div className="movie">
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.title}`}
          src={poster}
        />
      </div>
      <p>{movie.title}</p>
      <p>({movie.release_date})</p>
    </div>
  );
};


export default Movie;