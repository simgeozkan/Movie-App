/*
import React, { useEffect, useState } from "react";
import Loading from './Loading';

// TMDB API anahtarı
const api_key = "bc33151c1994574150615ce76d71b4eb";

function MovieDetails({ movie, onClose }) {
  // State tanımlamaları
  const [details, setDetails] = useState(null); // Film detayları
  const [loading, setLoading] = useState(true); // Yükleniyor mu?
  const [error, setError] = useState(null); // Hata mesajı
  const [loadedMovie, setLoadedMovie] = useState(true); // Film yüklendi mi?
  const [runtime, setRuntime] = useState(null); // Film süresi
  const [cast, setCast] = useState([]); // Oyuncu listesi
  const [director, setDirector] = useState(null); // Yönetmen

  // Film detaylarını ve oyuncu kadrosunu çekmek için useEffect
  useEffect(() => {
    if (!movie || !movie.id) return;

    async function getMovieDetails() {
      try {
        setLoading(true);
        setRuntime(null);

        // Film detaylarını çek
        const detailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${api_key}&language=en-US`
        );
        if (!detailsResponse.ok) throw new Error("Film detayları alınamadı.");

        const detailsData = await detailsResponse.json();

        // Oyuncu ve ekip bilgilerini çek
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${api_key}`
        );

        if (!creditsResponse.ok) throw new Error("Oyuncu bilgileri alınamadı.");
        const creditsData = await creditsResponse.json();

        setDetails(detailsData);
        setCast(creditsData.cast.slice(0, 5)); // İlk 5 oyuncuyu al

        // Yönetmeni bul
        const directorData = creditsData.crew.find(person => person.job === "Director");
        setDirector(directorData?.name || "Bilinmiyor");

        // Film süresini gecikmeli olarak ayarla (örnek amaçlı)
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

  // Yükleniyorsa Loading göster
  if (loading) return (<Loading />);
  // Hata varsa hata mesajı göster
  if (error) return <p style={{ color: "red" }}>Hata: {error}</p>;
  // Detay yoksa null dön
  if (!details) return null;

  // Arayüzü render et
  return (
    <div className="card my-4">

      {/* Kapatma butonu 
      <button
        className="btn-close position-absolute top-0 end-0 m-2"
        onClick={onClose}
      ></button>

      <div className="row g-0">

        {/* Film posteri
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            className="img-fluid rounded-start"
            alt={details.title}
          />
        </div>

        {/* Film detayları 
        <div className="col-md-8">
          <div className="card-body">

            {/* Yükleniyorsa tekrar Loading göster 
            {loading && <Loading />}
            <h5 className="card-title">{details.title}</h5>
            <p className="card-text">{details.overview}</p>

            {/* Film bilgileri 
            <p className="card-text">
              <p className="card-text">
                <small className="text-muted">
                  Release Date: {details.release_date} <br />
                  Director: {director} <br />
                  Companies:{" "}
                  {details.production_companies?.map(c => c.name).join(", ") || "Yok"} <br />
                  Countries:{" "}
                  {details.production_countries?.map(c => c.name).join(", ") || "Bilinmiyor"}
                </small>
              </p>

              {/* Film süresi 
              {loadedMovie && (
                <p><strong>sure : </strong>{runtime !== null ? `${runtime} dakika` : "Loading..."}</p>
              )}
            </p>

            {/* Türler 
            <div className="mb-2">
              {details.genres && details.genres.map((genre) => (
                <span key={genre.id} className="badge bg-secondary me-1">
                  {/* Tür ismi yazılabilir
                </span>
              ))}
            </div>

            {/* Oyuncu kadrosu 
            <h6 className="mt-4">Cast:</h6>
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

// Bileşeni dışa aktar
export default MovieDetails;

