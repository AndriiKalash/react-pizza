import React from 'react';
import { Routes, Route } from "react-router-dom";
// pages
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Cart from './pages/Cart.jsx'
import SinglePizzaInfo from "./pages/SinglePizzaInfo";
import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

function App() {
  
  return (
          <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route path='' element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path='cart' element={<Cart />} />
              <Route path='pizza/:id' element={<SinglePizzaInfo />} />
            </Route>        
          </Routes>
  );
}

export default App;
