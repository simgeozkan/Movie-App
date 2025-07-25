import React, { useState } from 'react';


function SearchForm({searchQuery,setSearchQuery}) {
  const [hover, setHover] = React.useState(false);
  return (
    <form onSubmit={e => { e.preventDefault(); }} style={{ marginTop: '0px', display: 'flex', alignItems: 'center' }}>
      <input 
      type="text" 
      placeholder="Search" 
      value={searchQuery} 
      onChange={(e)=>setSearchQuery(e.target.value)}
      style={{ padding: '5px', fontSize: '1rem' }} 
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
