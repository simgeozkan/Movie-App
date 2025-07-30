import React from 'react';
import Movie from './Movie';

function MovieList({ movies = [], onAddToList, onHandleSelectedMovie }) {
  return (
    <div className="container my-5">
      <h1 className="mb-4 h4">Popüler Filmler</h1>
      
      <div className="container">
  <div className="row g-3">
    {movies.map(movie => (
      <div key={movie.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
        <Movie movie={movie} />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default MovieList;
