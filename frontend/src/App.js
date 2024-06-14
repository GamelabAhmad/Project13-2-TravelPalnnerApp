import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import PaketTrip from './components/PaketTrip';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/paket-trip" element={<PaketTrip />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </div>
);

export default App;
