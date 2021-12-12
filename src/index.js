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
      <Route path="/project" element={ <Project /> } /> 
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

