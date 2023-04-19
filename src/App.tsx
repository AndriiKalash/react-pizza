import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
// pages
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home'
import './scss/app.scss';

const Cart = lazy(() => import(/*webpackChunkName: "Cart"*/'./pages/Cart'));
const NotFound = lazy(() => import(/*webpackChunkName: "NotFound"*/'./pages/NotFound'));
const SinglePizzaInfo = lazy(() => import(/*webpackChunkName: "SinglePizzaInfo"*/"./pages/SinglePizzaInfo"));

const App = () => (
  <Routes>
   <Route path='/' element={<MainLayout/>}>
     <Route path='' element={<Home />} />
     <Route path='*' element={
        <Suspense fallback={<div>...LOADING</div>}><NotFound /></Suspense>} />
     <Route path='cart' element={
        <Suspense fallback={<div>...LOADING</div>}><Cart /></Suspense>} />
     <Route path='pizza/:id' element={
         <Suspense fallback={<div>...LOADING</div>}>
          <SinglePizzaInfo />
         </Suspense>} />
    </Route>        
  </Routes>
);

export default App;
