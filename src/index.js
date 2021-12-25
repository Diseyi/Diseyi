import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/work" element={ <Project /> } /> 
      <Route path="/resume" render={ () => { 
     window.location = 'https://drive.google.com/file/d/1JV_xBQlCOHi2BaeUZcrvlA4fFU-ukwdp/view?usp=sharing';
} } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

