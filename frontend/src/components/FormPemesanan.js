import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  padding-left: 100px;
  padding-right: 100px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 20px;

  &:hover {
    background-color: #e55337;
  }
`;


const FormPemesanan = ({ trip, setShowForm }) => {
  const [formData, setFormData] = useState({
    nama: '',
    nomorHp: '',
    alamat: '',
    tanggalBerangkat: '',
    buktiPembayaran: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan pengiriman data pemesanan ke server atau lakukan logika lainnya di sini
    console.log('Data Pemesanan:', formData);
    setShowForm(false); // Tutup form setelah pemesanan berhasil diajukan
  };

  const handleCancel = () => {
    // Kosongkan data formulir saat pembatalan
    setFormData({
      nama: '',
      nomorHp: '',
      alamat: '',
      tanggalBerangkat: '',
      buktiPembayaran: null,
    });
    setShowForm(false); // Tutup form saat pembatalan
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, buktiPembayaran: file });
  };

  return (
    <FormContainer>
      <FormTitle>Form Pemesanan Paket Trip - {trip.title}</FormTitle>
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
          name="nomorHp"
          placeholder="Nomor HP"
          value={formData.nomorHp}
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
          type="date"
          name="tanggalBerangkat"
          placeholder="Tanggal Berangkat"
          value={formData.tanggalBerangkat}
          onChange={handleChange}
          required
        />
        <FormTextArea
          name="catatan"
          placeholder="Catatan (opsional)"
          value={formData.catatan}
          onChange={handleChange}
        />
        <FormInput
          type="file"
          name="buktiPembayaran"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <FormButton type="submit">Kirim Pesanan</FormButton>
        <FormButton type="button" onClick={handleCancel}>Batal Pesan</FormButton>
      </form>
    </FormContainer>
  );
};

export default FormPemesanan;
