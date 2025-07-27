import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';



const  MainLayout=()=> {
    return (
<>
          <Navbar/>             {/* Navbar component oluşturup onu buraya ekledik */}
        
            <main className='container mt-3'>
                 <Outlet/>          {/* // App.jsx te tanimladigimiz children path icinde yer alan tum componenetleri de goster */}
            </main>
</>     
    );
    
};

export default MainLayout;