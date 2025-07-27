
import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ movie }) {
  return (
    <div className="card h-100">

      <Link to={`/movies/${movie.id}`} >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card-img-top"
          alt={movie.title}
          style={{ height: '300px', objectFit: 'cover' }}
        />
      </Link>


      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text text-truncate" title={movie.description}>
          {movie.description || "Açıklama bulunamadı"}
        </p>
      </div>
    </div>
  );
}

export default Movie;
