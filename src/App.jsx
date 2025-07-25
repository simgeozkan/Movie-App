import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import WatchListButton from './components/WatchListButton';
import Logo from './components/Logo';
import MovieList from './components/MovieList';
import WatchList from './components/WatchList';
import Loading from './components/Loading';
import { movie_list } from './data.js';


const api_key = "bc33151c1994574150615ce76d71b4eb";
const page=1;
const query="batman";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const [loading, setLoading] = useState(true);

  //mounting;componenet ilk render edildiginde
  //re=render ;state degistiginde
  //unmount ; componentin dom dan kaldirilmasi


  

  useEffect(()=>{

async function getMovies(){
  setLoading(true);


    const response= await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`) ;


      const data=await response.json();

      setMovies(data.results);
      setLoading(false);
  }
  
  getMovies();


},[]);
 








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

        {loading ? (
  <Loading />
) : (
  <MovieList
    movies={movies}
    setMovies={setMovies}
    onAddToList={handleAddToWatchList}
  />
)}</div>

      

        {/* Watch List Section */}
        {showWatchlist && (
          <>
            <div style={{ background: '#f3f3f3', borderRadius: '10px', padding: '18px 0 8px 0', marginBottom: '0.5rem' }}>
              <h2 className="mb-0" style={{ fontWeight: 'bold', fontSize: '2rem', color: '#800000', textAlign: 'left', paddingLeft: '24px' }}>Watch List</h2>
            </div>
            <div style={{ background: '#fff', borderRadius: '10px', padding: '16px 0', marginBottom: '2.5rem', border: '1px solid #e0e0e0' }}>
              <WatchList movies={watchlistMovies} handleRemove={handleRemove} />
            </div>
          </>
        )}
      </Main>

      <Footer />
    </>
  );
}

export default App;
