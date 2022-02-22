import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';

import Calculator from './components/Calculator';
import Nav from './components/Navigation';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
