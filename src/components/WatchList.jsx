import React from 'react';
import Movie from './Movie';

function WatchList({ 
  movies ,
  title,
  removeFromWatchList
}) 
  

{
  return (
    <div className="row">
      <h1>{title}</h1>

      {movies.length === 0 ? (

        <div className="col-12 text-center py-4">
          <i className="bi bi-heart text-muted" style={{ fontSize: '3rem' }}></i>
          <p className="text-muted mt-2">No movies in watchlist.</p>
        </div>
      ) : 
      
      
        
        (movies.map(movie => (

          <div key={movie.id} className="col-md-2 mb-4">
            <div className="card h-100 position-relative" style={{ height: 'auto' }}>
              <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} className="card-img-top" alt={movie.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text flex-grow-1">{movie.description}</p>
                <div className="mt-auto">


                  <button className="btn btn-success btn-sm m-2" disabled>
                    <i className="bi bi-heart-fill"></i> In Watchlist
                  </button>
                  


                  <button

                    type="button"
                    className="badge bg-danger border-0 position-absolute top-0 end-0 m-2"
                    onClick={() => removeFromWatchList(movie.id)}>

                         <i className="bi bi-x fs-4"></i>

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