import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import WatchListButton from './components/WatchListButton';
import Logo from './components/Logo';
import MovieList from './components/MovieList';
import WatchList from './components/WatchList';
import { movie_list } from './data.js';

function App() {
  const [movies, setMovies] = useState(movie_list);
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [showWatchlist, setShowWatchlist] = useState(false);


  const handleRemove = (id) => {
    setWatchlistMovies(prevList => prevList.filter(movie => movie.id !== id));
  };


  function handleAddToWatchList(movie) {
    const isAlreadyInWatchlist = watchlistMovies.some(watchlistMovie => watchlistMovie.id === movie.id);
    if (!isAlreadyInWatchlist) {
      setWatchlistMovies(prevWatchlist => [...prevWatchlist, movie]);
    }
  }

  return (
    <>
      <Header>
        <div className="row align-items-center">
          <div className="col-md-4">
            <Logo />
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center justify-content-end">
              <SearchForm movies={movies} setMovies={setMovies} />
              <div style={{ marginLeft: '1px' }}>
                <WatchListButton 
                  movies={watchlistMovies} 
                  setShowWatchlist={setShowWatchlist} 
                />
              </div>
            </div>
          </div>
        </div>
      </Header>

      <Main>
        {/* Movie List Section */}
        <div style={{ background: '#f3f3f3', borderRadius: '10px', padding: '18px 0 8px 0', marginBottom: '0.5rem' }}>
          <h2 className="mb-0" style={{ fontWeight: 'bold', fontSize: '2rem', color: '#800000', textAlign: 'left', paddingLeft: '24px' }}>Movie List</h2>
        </div>
        <div style={{ background: '#fff', borderRadius: '10px', padding: '16px 0', marginBottom: '2.5rem', border: '1px solid #e0e0e0' }}>
          <MovieList 
            movies={movies} 
            setMovies={setMovies} 
            onAddToList={handleAddToWatchList} 
          />
        </div>

        {/* Watch List Section */}
        {showWatchlist && (
          <>
            <div style={{ background: '#f3f3f3', borderRadius: '10px', padding: '18px 0 8px 0', marginBottom: '0.5rem' }}>
              <h2 className="mb-0" style={{ fontWeight: 'bold', fontSize: '2rem', color: '#800000', textAlign: 'left', paddingLeft: '24px' }}>Watch List</h2>
            </div>
            <div style={{ background: '#fff', borderRadius: '10px', padding: '16px 0', marginBottom: '2.5rem', border: '1px solid #e0e0e0' }}>
              <WatchList movies={watchlistMovies}  handleRemove={handleRemove} />
            </div>
          </>
        )}
      </Main>

      <Footer />
    </>
  );
}

export default App;
