import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import Movies from '../pages/Movies';

function Home() {
    return (
 <>
    <div id="home">
        <div className="img-overlay">
            <div className="container">
            <div className="row">
                <div className="col-12 col-lg-7 mx-auto text-center text-white mb-5">
                    <h1 className="display-2">Welcome !</h1>
                    <p className="lead">
                    Discover, Explore, and Enjoy the World of Movies!
                    </p>
                    <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '32px' }}>
                             <SearchForm  />
                  </div>   
                </div>
            </div>
           
            </div>
        </div>
    </div>
    <div className="container-2">
            <Movies/>

    </div>
 

 </>
        )
}

export default Home;
