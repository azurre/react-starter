import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { TestPage } from './TestPage';
import { IndexPage } from './IndexPage';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/test' element={<TestPage />} />
      <Route path='/' element={<IndexPage activeMenu='files' />} />
    </Routes>
  </BrowserRouter>
);
