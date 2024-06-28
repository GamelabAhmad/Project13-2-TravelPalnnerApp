import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import PaketTrip from './components/PaketTrip';
import FormPemesanan from './views/FormPemesanan';
import PaketTripDetail from './views/PaketTripDetail';
import Destinasi from './components/Destinasi';
import DestinasiBali from './components/DestinasiBali';
import DestinasiYogyakarta from './components/DestinasiYogyakarta';
import DestinasiJateng from './components/DestinasiJateng';
import DestinasiJatim from './components/DestinasiJatim';
import DestinasiSumatera from './components/DestinasiSumatera';
import DestinasiNTT from './components/DestinasiNTT';
import DestinasiPapua from './components/DestinasiPapua';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './views/ProtectedRoute';
import PublicRoute from './views/PublicRoute';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Destinasi />} />
      <Route path="/register" element={
                <PublicRoute>
                  <Register />
                </PublicRoute>} />
      <Route path="/login" element={
                <PublicRoute>
                  <Login />
                </PublicRoute>} />

      <Route path="/paket-trip" element={
                <ProtectedRoute>
                   <PaketTrip />
                </ProtectedRoute>}/>
      <Route path="/Form-Pemesanan" element={
                <ProtectedRoute>
                   <FormPemesanan />
                </ProtectedRoute>} />

      <Route path="/trip/:tripId" element={
                <ProtectedRoute>
                   <PaketTripDetail />
                </ProtectedRoute>} />

      <Route path="/bali" element={
                <ProtectedRoute>
                   <DestinasiBali />
                </ProtectedRoute>}/>
      
      <Route path="/yogyakarta"  element={
                <ProtectedRoute>
                   <DestinasiYogyakarta />
                </ProtectedRoute>}/>

      <Route path="/jateng" element={
                <ProtectedRoute>
                   <DestinasiJateng />
                </ProtectedRoute>}/>

      <Route path="/jatim" element={
                <ProtectedRoute>
                   <DestinasiJatim />
                </ProtectedRoute>}/>
      
      <Route path="/sumatera" element={
                <ProtectedRoute>
                   <DestinasiSumatera />
                </ProtectedRoute>}/>
      
      <Route path="/ntt" element={
                <ProtectedRoute>
                   <DestinasiNTT />
                </ProtectedRoute>}/>
      
      <Route path="/papua" element={
                <ProtectedRoute>
                   <DestinasiPapua />
                </ProtectedRoute>}/>
      
    </Routes>
  </>
);

export default App;
