import React, { useContext } from 'react';
import { TemaContext } from '../context/TemaContext.jsx';

function TemaSelector() {

  const { tema, setTema } = useContext(TemaContext);

  const handleThemeToggle = () => {

    setTema(prevTema => (prevTema === "light" ? "dark" : "light"));
  }

  return (
    
    <div className="tema-selector">
     
     

     <button
              className={`btn } m-2`}

              onClick={handleThemeToggle}
         
            >
              {tema === "dark" ? (

                <i className="bi bi-sun-fill"></i> // Koyu tema ise güneş ikonu
              ) : (
                <i className="bi bi-moon-fill"></i> // Açık tema ise ay ikonu
              )}
            </button>
       
      
      
    </div>
  );
}

export default TemaSelector;
