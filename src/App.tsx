import React from 'react';
import { Login } from './Pages/Login';
import { Web } from './Pages/Web';

import './styles/global.css';
import { Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/web' element={<Web /> } />      
    </Routes>
  );
}
