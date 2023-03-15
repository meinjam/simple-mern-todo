import axios from 'axios';
import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
const LazyHome = lazy(() => import('./pages/Home'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyContact = lazy(() => import('./pages/Contact'));

document.body.classList.add('font-nunito');

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token') ?? '';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      {/* <MainNavbar /> */}
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback='Loading.....'>
              <LazyHome />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <Suspense fallback='Loading.....'>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense fallback='Loading.....'>
              <LazyContact />
            </Suspense>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
