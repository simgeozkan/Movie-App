

import React, { useEffect, useState } from "react";
import Loading from './Loading';

const api_key = "bc33151c1994574150615ce76d71b4eb";

function MovieDetails({ movie, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadedMovie, setLoadedMovie] = useState(true);
  const [runtime, setRuntime] = useState(null);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState(null);

  useEffect(() => {
    if (!movie || !movie.id) return;

    async function getMovieDetails() {
      try {
        setLoading(true);
        setRuntime(null);


        const detailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${api_key}&language=en-US`
        );
        if (!detailsResponse.ok) throw new Error("Film detayları alınamadı.");

        const detailsData = await detailsResponse.json();

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${api_key}`
        );

        if (!creditsResponse.ok) throw new Error("Oyuncu bilgileri alınamadı.");
        const creditsData = await creditsResponse.json();

        setDetails(detailsData);
        setCast(creditsData.cast.slice(0, 5)); // İlk 5 oyuncu

        const directorData = creditsData.crew.find(person => person.job === "Director");
        setDirector(directorData?.name || "Bilinmiyor");



        setTimeout(() => {
          setRuntime(detailsData.runtime);
        }, 1500);



      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getMovieDetails();
  }, [movie]);

  if (loading) return (<Loading />);
  if (error) return <p style={{ color: "red" }}>Hata: {error}</p>;
  if (!details) return null;

  return (
    <div className="card my-4">
      <button
        className="btn-close position-absolute top-0 end-0 m-2"
        onClick={onClose}
      ></button>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            className="img-fluid rounded-start"
            alt={details.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">

            {loading && <Loading />}
            <h5 className="card-title">{details.title}</h5>
            <p className="card-text">{details.overview}</p>
            <p className="card-text">

              <br />

              <p className="card-text">
                <small className="text-muted">
                  Çıkış Tarihi: {details.release_date} <br />
                  Yönetmen: {director} <br />
                  Yapımcı Şirketler:{" "}
                  {details.production_companies?.map(c => c.name).join(", ") || "Yok"} <br />
                  Ülkeler:{" "}
                  {details.production_countries?.map(c => c.name).join(", ") || "Bilinmiyor"}
                </small>
              </p>

              {loadedMovie && (


                <p><strong>sure : </strong>{runtime !== null ? `${runtime} dakika` : "Yükleniyor..."}</p>

              )}
            </p>

            <div className="mb-2">
              {details.genres && details.genres.map((genre) => (
                <span key={genre.id} className="badge bg-secondary me-1">
                  {genre.name}
                </span>
              ))}
            </div>


            <h6 className="mt-4">Oyuncular:</h6>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
              {cast.map((actor) => (
                <div className="col" key={actor.cast_id}>
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
}

export default MovieDetails;





















