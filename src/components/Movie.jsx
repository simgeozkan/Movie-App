import React from 'react';

function Movie({ movie, onAddToList }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={movie.image} className="card-img-top" alt={movie.title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
          <div className="mt-auto">
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => onAddToList(movie)}
            >
              <i className="bi bi-heart"></i> Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie; 