import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import '../index.css';

const Navbar = () => {
  return (
   <>



    <nav
      className="bg-dark text-white container-fluid mb-3 d-flex justify-content-between"
      style={{
        padding: '2rem',
        background: '#222', // koyu arkaplan
        color: '#fff',      // beyaz yazi
        borderBottom: '1px solid #333'
      }}
    >
    <Logo/>
    <div className="d-flex">
      <NavLink
        to="/"
        end
        style={{ marginRight: '1rem', color: '#fff', textDecoration: 'none' }}
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >


        Home


      </NavLink>

      <NavLink
        to="/movies"
        end
        style={{ marginRight: '1rem', color: '#fff', textDecoration: 'none' }}
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >


        Movies


      </NavLink>
      </div>
     
    </nav>
    </>
  );
};

export default Navbar;
