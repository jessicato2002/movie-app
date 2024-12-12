import React from 'react';
import NavBar from '../components/NavBar.js';
import {Welcome} from '../components/Welcome.js';
import {PopMovies} from '../components/PopMovies.js';
function HomePage(){
    return(
        <div>
            <NavBar />
            <Welcome />
            <PopMovies />
        </div>
    );
}

export default HomePage;