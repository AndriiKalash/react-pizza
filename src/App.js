import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
// pages
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Cart from './pages/Cart.jsx'
import './scss/app.scss';

function App() {
  
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div >
  );
}

export default App;
