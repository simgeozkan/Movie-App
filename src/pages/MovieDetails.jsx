import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import SimilarMovies from './SimilarMovies';
import Footer from "../components/Footer";
import { UserContext } from '../context/UserContext.jsx';

const api_url = "https://api.themoviedb.org/3";
const api_key = "bc33151c1994574150615ce76d71b4eb";
const page = 1;


function MovieDetails() {

  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { watchList,addToWatchList,removeFromWatchList} = useContext(UserContext);

  useEffect(() => {
    async function getMovie() {
      try {
        const [movieRes, creditsRes] = await Promise.all([
          fetch(`${api_url}/movie/${id}?api_key=${api_key}`),
          fetch(`${api_url}/movie/${id}/credits?api_key=${api_key}`)
        ]);

        if (!movieRes.ok || !creditsRes.ok) {
          throw new Error("Veri çekme hatası");
        }

        const movieData = await movieRes.json();
        const creditsData = await creditsRes.json();

        setMovie(movieData);
        setCast(creditsData.cast.slice(0, 10));

        const director = creditsData.crew.find(p => p.job === "Director");
        setDirector(director?.name || "Bilinmiyor");

        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return null;

  return (

    <>
      <div
        className="text-white position-relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="img-overlay">
          <div className="container d-flex align-items-center min-vh-100 justify-content-center">
            <div className="row align-items-center w-100">
              <div className="col-md-3 d-none d-lg-block text-center">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid rounded shadow img-thumbnail"
                />
              </div>
              <div className="col-md-9">
                <h1 className="display-4">{movie.title}</h1>
                <p>
                  Release date: {movie.release_date}
                  <i className="bi bi-dot text-white mx-1"></i>
                  <span className="text-white">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                    <i className="bi bi-dot text-white mx-1"></i>
                    {movie.runtime} min
                  </span>
                </p>
                <p>
                  <span className="badge bg-warning fs-6">
                    {Math.round(movie.vote_average * 10)}%
                  </span>


                  
                  {(() => {
                    // movie'nin watchlist'te olup olmadığını kontrol et
                    const isAlreadyInWatchlist = watchList && watchList.some(watchListMovie => watchListMovie.id === movie.id);
                    return (
                      <span
                    className={`badge fs-4 ms-2 pointer `}
                    onClick={() => {
                      // Filmin izleme listesinde olup olmadığını kontrol et
                      if (isAlreadyInWatchlist) {
                        removeFromWatchList(movie.id); // Listede ise kaldır
                      } else {
                        addToWatchList(movie); // Listede değilse ekle
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className={`bi ${isAlreadyInWatchlist ? 'bi-heart-fill text-danger' : 'bi-heart '}`}></i>
                  </span>
                    );
                  })()}
                  
                </p>

                


                <p className="lead">
                  <strong>Summary:</strong> {movie.overview}
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                  <span>Director: {director}</span>
                  <span>
                    Companies: {movie.production_companies?.map((c) => c.name).join(", ") || "Yok"}
                  </span>
                  <span>
                    Countries: {movie.production_countries?.map((c) => c.name).join(", ") || "Bilinmiyor"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CAST ALANI */}
      <div className="container ">
        <h6 className="text-center ">Cast</h6>
        <div className="card card-body border-0 shadow-sm bg-light">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
            {cast.map((actor) => (
              <div className="col" key={actor.cast_id || actor.id}>
                <div className="card h-100 text-center border-0 shadow-sm">
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : "https://via.placeholder.com/185x278?text=No+Image"
                    }
                    className="card-img-top"
                    alt={actor.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title mb-1 text-truncate" style={{ fontSize: "0.9rem" }}>
                      {actor.name}
                    </h6>
                    <p className="card-text text-muted mb-0" style={{ fontSize: "0.75rem" }}>
                      <em>{actor.character}</em>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Similar Movies ve Footer */}
      <div className="container">
        <h6 className="text-center mt-4">Similar Movies</h6>
        <SimilarMovies movieId={movie.id} />

      </div>
    </>


  );


};

export default MovieDetails;
