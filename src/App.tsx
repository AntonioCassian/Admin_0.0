import React from 'react';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import './styles/global.css';
import { Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}
