import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
