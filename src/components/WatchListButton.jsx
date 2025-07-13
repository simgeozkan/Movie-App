import React from 'react';

function WatchListButton({movies, setShowWatchlist}) {
  return (
    <button 
      className="btn btn-outline-light position-relative"
      onClick={() => setShowWatchlist(prev => !prev)}
    >
      <i className="bi bi-heart-fill me-2"></i>
      Watchlist
      {movies.length > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {movies.length}
        </span>
      )}
    </button>
  );
}

export default WatchListButton; 