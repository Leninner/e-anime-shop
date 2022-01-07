import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';
import '../assets/styles/Global.scss';
import { AppContext } from '../context';
import { useSumaTotal } from '../hooks/useSumaTotal';
import CheckoutList from '../containers/CheckoutList';

const App = () => {
  const initialState = useSumaTotal();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckoutList />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
