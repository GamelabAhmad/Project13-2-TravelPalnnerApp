import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-top: 230px; /* Meningkatkan margin atas untuk menurunkan posisi */
  background-color: #ffffff;
  border-radius: 8px;
  border: 2px solid #ddd; /* Menambahkan bingkai */
  max-width: 600px; /* Membatasi lebar maksimum agar responsif */
  margin-left: auto;
  margin-right: auto;
  padding: 80px; /* Menambahkan padding internal untuk memberikan ruang di dalam kontainer */
  box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 250px; /* Mengurangi margin atas pada layar yang lebih kecil */
  }
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 50px;
  margin-top: -30px;
  text-align: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 25px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #F5E553;
  color: Black;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e55337;
  }
`;

const BackButton = styled.h2`
  position: absolute;
  font-size: 20px;
  border: none;
  color: #000000;
  cursor: pointer;
  margin-bottom: 50px;
  top: 120px; 
  left: 80px;
`;

const FormPemesanan = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    nomorHp: '',
    tujuanTrip: '',
    tanggalKepergian: '',
    buktiPembayaran: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan pengiriman data pemesanan ke server atau logika lainnya di sini
    console.log('Data Pemesanan:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, buktiPembayaran: file });
  };

  const handleBackClick = () => {
    navigate('/paket-trip'); // Navigasi ke halaman daftar paket trip
  };

  return (
    <FormContainer>
      <BackButton onClick={handleBackClick}>&#x2190; Kembali</BackButton>
      <FormTitle>Form Pemesanan Paket Trip</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="nama"
          placeholder="Nama"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="alamat"
          placeholder="Alamat"
          value={formData.alamat}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="nomorHp"
          placeholder="Nomor HP"
          value={formData.nomorHp}
          onChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="tujuanTrip"
          placeholder="Tujuan Trip"
          value={formData.tujuanTrip}
          onChange={handleChange}
          required
        />
        <FormInput
          type="date"
          name="tanggalKepergian"
          placeholder="Tanggal Kepergian"
          value={formData.tanggalKepergian}
          onChange={handleChange}
          required
        />
        <FormInput
          type="file"
          name="buktiPembayaran"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <FormButton type="submit">Kirim Pesanan</FormButton>
      </form>
    </FormContainer>
  );
};

export default FormPemesanan;
