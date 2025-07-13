import React from 'react';
import Movie from './Movie';

function WatchList({ movies }) {
  return (
    <div className="row">
      {movies.length === 0 ? (
        <div className="col-12 text-center py-4">
          <i className="bi bi-heart text-muted" style={{ fontSize: '3rem' }}></i>
          <p className="text-muted mt-2">No movies in watchlist.</p>
        </div>
      ) : (
        movies.map(movie => (
          <div key={movie.id} className="col-12 col-md-4 col-lg-4 mb-4">
            <div className="card h-100" style={{ height: 'auto' }}>
              <img src={movie.image} className="card-img-top" alt={movie.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text flex-grow-1">{movie.description}</p>
                <div className="mt-auto">
                  <button className="btn btn-success btn-sm" disabled>
                    <i className="bi bi-heart-fill"></i> In Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default WatchList; 