import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { TemaContext, TemaProvider } from './context/TemaContext.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
   <StrictMode>
    <TemaProvider>   {/* themeContext e erisebilen tum componenetler bu value yada erisebilir.Temacontext icerisinde provider tanimladik*/}
      <App />
    </TemaProvider>
    
  </StrictMode>
  </>
);
