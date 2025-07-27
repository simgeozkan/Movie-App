import React from 'react';
import Movie from './Movie';

function MovieList({ movies = [], onAddToList,onHandleSelectedMovie }) {
  return (
    <div className="row">
      {movies.map(movie => (

        <Movie 
          key={movie.id} 
          movie={movie} 
          onAddToList={onAddToList}
          onHandleSelectedMovie={onHandleSelectedMovie}
           />

      ))}
    </div>
  );
}

export default MovieList; 