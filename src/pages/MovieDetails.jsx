import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const api_url = "https://api.themoviedb.org/3";
const api_key = "bc33151c1994574150615ce76d71b4eb";
const page=1;


function MovieDetails() {

    const {id}=useParams();
    console.log(id);

    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [director, setDirector] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
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
            setCast(creditsData.cast.slice(0, 5));
            
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
        <div className="card my-4">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="img-fluid rounded-start"
                alt={movie.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
      
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: {movie.release_date} <br />
                    Director: {director} <br />
                    Companies:{" "}
                    {movie.production_companies?.map(c => c.name).join(", ") || "Yok"} <br />
                    Countries:{" "}
                    {movie.production_countries?.map(c => c.name).join(", ") || "Bilinmiyor"} <br />
                    Süre: {movie.runtime ? `${movie.runtime} dakika` : "Yükleniyor..."}
                  </small>
                </p>
      
                <div className="mb-2">
                  {movie.genres && movie.genres.map((genre) => (
                    <span key={genre.id} className="badge bg-secondary me-1">
                      {genre.name}
                    </span>
                  ))}
                </div>
      
                <h6 className="mt-4">Cast:</h6>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
                  {cast.map((actor) => (
                    <div className="col" key={actor.cast_id || actor.id}>
                      <div className="card h-100 text-center">
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
                          <h6 className="card-title mb-0" style={{ fontSize: "0.9rem" }}>
                            {actor.name}
                          </h6>
                          <p className="card-text" style={{ fontSize: "0.75rem" }}>
                            <em>{actor.character}</em>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
      
              </div>
            </div>
          </div>
        </div>
      );
      
        
  
};

export default MovieDetails;
