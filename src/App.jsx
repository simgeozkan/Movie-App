import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MainLayout from './layouts/MainLayout';



const routes = createBrowserRouter([
  {

    path: "/",

    element: <MainLayout />,
    //Nav yapisini burda tanimladik cunku heryerde kuyllaniliyor layout yaptik.bu layout asagidaki pathlerin hepsine uygulanacak

    children: [
      { index:true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "movies/1", element: <MovieDetails /> },],

  }

]);




function App() {
  return <RouterProvider router={routes} />

}

export default App;
