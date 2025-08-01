import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import {  TemaContextProvider } from './context/TemaContext.jsx';
import { UserContextProvider } from './context/UserContext.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
   <StrictMode>
      <UserContextProvider>
        <TemaContextProvider>   {/* themeContext e erisebilen tum componenetler bu value yada erisebilir.Temacontext icerisinde provider tanimladik*/}
           <App />
        </TemaContextProvider>
    </UserContextProvider>  
  </StrictMode>
  </>
);
