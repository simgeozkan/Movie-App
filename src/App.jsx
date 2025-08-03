import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MainLayout from './layouts/MainLayout';
import SearchResults from './pages/SearchResults';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserWatchList from './pages/UserWatchList';
import Register from './pages/Register';
import LoginState from './pages/LoginState';


const routes = createBrowserRouter([
  {

    path: "/",

    element: <MainLayout />,
    //Nav yapisini burda tanimladik cunku heryerde kuyllaniliyor layout yaptik.bu layout asagidaki pathlerin hepsine uygulanacak

    children: [
      { index:true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "movies/:id", element: <MovieDetails /> },
      { path: "search/", element: <SearchResults /> },
      { path: "watchlist/", element: <UserWatchList /> },
      { path: "login/", element: <LoginState/> },
      { path: "register/", element: <Register/> },
    
    
    ],

  }

]);




function App() {


  return (



      <RouterProvider router={routes} />
 


  )

}

export default App;
