import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import SearchForm from './SearchForm';
import '../index.css';
import { TemaContext } from '../context/TemaContext.jsx';
import TemaSelector from './TemaSelector.jsx';
import { UserContext } from '../context/UserContext.jsx';








const Navbar = () => {

 
const {tema,setTema}=useContext(TemaContext);
const { watchList} = useContext(UserContext);

const color=tema==="dark"? "text-white":"text-black";


  
  return (

   <>


   
      <nav
        className={`navbar navbar-expand-lg bg-${tema} border-bottom border-body ${color}`}
        data-bs-theme={tema}
       
        
      >
        <div className="container-fluid">
        <TemaSelector/>

          <NavLink className={`navbar-brand ${color}" to="/"`}>
          
            <Logo />
          </NavLink>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                
                  to="/"
                  end
                  className={'nav-link '}
               
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movies"
                  className={'nav-link '}
                 
                >
                  Movies
                </NavLink>
              </li>
            </ul>


            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                
                  to="/login"
                  end
                  className={'nav-link '}
               
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className={'nav-link '}
                 
                >
                  Register
                </NavLink>
              </li>
            </ul>

           
            <SearchForm />

            <NavLink
                  to="/watchlist"
                  className={`btn btn-${tema} border position-relative ms-1`}>
                  <i className='bi bi-heart-fill'></i>
                 <span className='position-absolute top-0 start-100 badge rounded-pill bg-danger translate-middle' >
                  {watchList.length}
                 </span>
                
                 
                </NavLink>
          </div>
        </div>
      </nav>
   

    </>
  );
};

export default Navbar;
