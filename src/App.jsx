import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {Routes,Route}from 'react-router-dom'
import Home from './Routes/Home';
import Repos from './Routes/Repos';
import RepoPage from './Routes/RepoPage';
import Navigation from './componenets/Navigation';
import Footer from './componenets/Footer';
import ErrorPage from './Routes/ErrorPage';
import ErrorBoundary from './Routes/ErrorBoundary';


function App() {
return (
  <div className="container">
    <Navigation/>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/repos/*" element={<Repos />} />
      <Route path='/error-boundary' element={<ErrorBoundary/>} />
      <Route path='*' element={<ErrorPage/>}/>
    
    </Routes>
    <Footer/>
  </div>
);
 
}

export default App;
