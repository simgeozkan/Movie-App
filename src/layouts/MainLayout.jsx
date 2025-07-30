import React from 'react';
import {  Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TemaContext } from '../context/TemaContext.jsx';
import { useContext } from 'react';






const  MainLayout=()=> {


const {tema}= useContext(TemaContext);
const color=tema==="dark"? "bg-dark text-white":"bg-white text-gray-900";



    return (
<>
          <Navbar/>             {/* Navbar component oluşturup onu buraya ekledik */}
        
            <main className={color}>
                 <Outlet/>          {/* // App.jsx te tanimladigimiz children path icinde yer alan tum componenetleri de goster */}
            
            </main>
            <Footer />



</>     
    );
    
};

export default MainLayout;