import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import SearchForm from './SearchForm';
import '../index.css';
import { TemaContext } from '../context/TemaContext.jsx';








const Navbar = () => {

 
const {tema}=useContext(TemaContext);

const color=tema==="dark"? "text-white":"text-black";
  
  return (
   <>


   
      <nav
        className={`navbar navbar-expand-lg bg-${tema} border-bottom border-body ${color}`}
        data-bs-theme={tema}
        
      >
        <div className="container-fluid">

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
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${color}`}
               
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movies"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${color}`}
                 
                >
                  Movies
                </NavLink>
              </li>
            </ul>
            <SearchForm />
          </div>
        </div>
      </nav>
   

    </>
  );
};

export default Navbar;
