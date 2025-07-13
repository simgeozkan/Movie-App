import React, { createContext, useContext, useState } from 'react';
import { movie_list } from '../data.js';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(movie_list);
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [showWatchlist, setShowWatchlist] = useState(false);

  return (
    <MovieContext.Provider value={{
      movies,
      setMovies,
      watchlistMovies,
      setWatchlistMovies,
      showWatchlist,
      setShowWatchlist
    }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
}; 