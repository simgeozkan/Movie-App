import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Errormessage from '../components/ErrorMessage';
import Movie from '../components/Movie';
import { useSearchParams } from 'react-router-dom';
import Pagenation from '../components/Pagenation';


const api_url = "https://api.themoviedb.org/3";
const api_key = "bc33151c1994574150615ce76d71b4eb";



function SearchResults() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

    const query=searchParams.get("q");
    const page = parseInt(searchParams.get("page")) || 1;
    


    useEffect(() => {
        async function getMovies() {
            setLoading(true);
          try {
            const response = await fetch(
              `${api_url}/search/movie?api_key=${api_key}&query=${query}&page=${page}`
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
            setTotalPages(data.total_pages);
    
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
      }, [query,page]);
    


      if(loading){
        return (<Loading/>) 
      }

      

      if(error){
        return (<ErrorMessage message={error}/>)
       
      }
      console.log("Query:", query, "Page:", page);


    return (
        <>
        <div style={{ background: '#f1f1f1', padding: '12px 20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h6 style={{ margin: 0, color: '#222', fontWeight: 600 }}>Arama sonuclari : {query}</h6>
        </div>
       
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
        
        {movies.map(movie => (
          <div key={movie.id} className="col">
            <Movie movie={movie} />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>

  <Pagenation 
    page={page} 
    totalPages={totalPages} 
    setSearchparams={setSearchParams} 
    query={query} 
  />
 
</div>
      
      </>
  
    
        

    )
}

export default SearchResults;
