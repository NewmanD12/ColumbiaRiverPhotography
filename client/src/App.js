import './App.css';
import { Router, Link } from '@reach/router'; 
import React from 'react';
import Main from './views/Main';
import About from './views/About';
import Gallery from './views/Gallery';
import Appointments from './views/Appointments'


function App() {
  return (
    <div className = 'body-wrapper'>
      <h1 className = 'main-header'>Columbia River Photography</h1>
      <h3>Slogan here ...</h3>
      <div className = 'nav-bar'>
        <Link to = '/'>Home</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/gallery'>Gallery</Link>
        <Link to = '/appointments'>Appointments</Link>
      </div>
      <Router>
        <Main path = '/' />
        <About path = '/about' />
        <Gallery  path = '/gallery' />
        <Appointments path = '/appointments'/>
      </Router>
    </div>
  );
}

export default App;

