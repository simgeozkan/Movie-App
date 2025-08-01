import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

function SearchForm({}) {
  



  const [searchQuery, setSearchQuery] = useState("");

  const [hover, setHover] = React.useState(false);

  const navigate = useNavigate(); // useNavigate hook'unu ekle




  function handleSubmit(e) {

    e.preventDefault(); //sayfanin yenilenmesini engeller



    const query=searchQuery.trim();//bastaki sondaki bosluklari siler

    if(query)
        {
          navigate(`/search/?q=${encodeURIComponent(query)}`); //kullaniciyi search sayfasina yonlendir ve aradigi seyi q parametresiyle URL ye ekle
          setSearchQuery("");
        }
  }


  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '0px', display: 'flex', alignItems: 'center' }}>
      <input 
      
      type="search" 
      placeholder="Search" 
      value={searchQuery} 
      onChange={(e)=>setSearchQuery(e.target.value)}
      style={{ ppadding: '10px 14px',
        fontSize: '1.1rem',
        width: '100%', // veya '400px'
        maxWidth: '600px',
        borderRadius: '8px',
        border: '1px solid #ccc' }} 
      />

      <div
        style={{
          marginLeft: '5px',
          width: '40px',
          height: '40px',
          border: hover ? '1px solid #fff' : '1px solid #fff',
          borderRadius: '8px',
          background: hover ? 'rgba(236, 233, 233, 0.93)' : 'rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s, border 0.2s',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        
        <button
          type="submit"
          className="btn p-0 border-1 bg-transparent"
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none' }}
        >
          <i className="bi bi-search" style={{ color: hover ? '#222' : '#fff', fontSize: '1.3rem', transition: 'color 0.2s' }}></i>
        </button>

      </div>

    </form>
  );
}

export default SearchForm;
