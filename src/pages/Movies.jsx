import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Errormessage from '../components/ErrorMessage';
import Movie from '../components/Movie';

const api_url = "https://api.themoviedb.org/3";
const api_key = "bc33151c1994574150615ce76d71b4eb";
const page=1;


function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

    useEffect(() => {
        async function getMovies() {
            setLoading(true);
          try {
            const response = await fetch(
              `${api_url}/movie/popular?api_key=${api_key}&page=${page}`
            );
      
            if (!response.ok) {
              // Hata durumuna göre özel mesajlar
              if (response.status === 401) {
                throw new Error("API anahtarı geçersiz veya yetkisiz erişim (401).");
              } else if (response.status === 404) {
                throw new Error("Film bulunamadı (404).");
              } else if (response.status === 500) {
                throw new Error("Sunucu hatası (500). Lütfen daha sonra tekrar deneyin.");
              } else {
                throw new Error(`Beklenmeyen hata: ${response.status}`);
              }
            }
      
            const data = await response.json();
    
            setMovies(data.results);
    
            console.log(data.results);
    
            setError("");
    
          } catch (error) {
    
            console.error('Film verisi alınamadı:', error);
    
            // Hata durumunda kullanıcıya mesaj göstermek için:
            setError(error.message);
    
          } finally {
    
            setLoading(false); // loading ne olursa olsun durmalı
    
          }
        }
       {} 
       
       
       {/*if(searchQuery.length<4){
          setMovies([]);
          setError([]);
          return;
        }*/}
    
        getMovies();
      }, []);
    
      if(loading){
        return (<Loading/>) 
      }

      
      if(error){
        return (<ErrorMessage message={error}/>)
       
      }


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {movies.map(movie => (
          <div key={movie.id} className="col">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
      
  
    
        

    )
}

export default Movies;
