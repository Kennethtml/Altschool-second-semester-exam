import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {Routes,Route}from 'react-router-dom'
import Home from './Routes/Home';
import Repos from './Routes/Repos';
import RepoPage from './Routes/RepoPage';
import Navigation from './componenets/Navigation';


function App() {
return (
  <div className="container">
    <Navigation/>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/repos/*" element={<Repos />} />
    
    </Routes>
  </div>
);
 
}

export default App;
