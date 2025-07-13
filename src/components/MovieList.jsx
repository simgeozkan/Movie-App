import React from 'react';
import Movie from './Movie';

function MovieList({ movies = [], onAddToList }) {
  return (
    <div className="row">
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} onAddToList={onAddToList} />
      ))}
    </div>
  );
}

export default MovieList; 