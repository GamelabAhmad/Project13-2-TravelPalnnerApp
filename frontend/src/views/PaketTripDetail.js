import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import trips from '../data/trips.js';

const DetailContainer = styled.div`
  padding: 150px 20px;
  background-color: #F0F0F0;
  text-align: center;
  min-height: 100vh;
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const BackButton = styled.h2`
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  color: black;
  position: absolute;
  top: 125px;
  left: 60px; /* Memposisikan tombol kembali ke sisi kiri atas */
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    padding: 8px 16px;
    width: calc(100% - 40px);
    left: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin: 10px auto; /* Memposisikan gambar ke tengah */

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 25px;
  color: #333;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin: 20px 0;
  text-align: justify;  /* Rata kanan kiri */
  line-height: 1.6; /* Jarak spasi baris lebih lebar */
  padding-bottom: 30px; /* Memberi ruang di bawah border */
  border-bottom: 2px solid #6B6B6B; /* Border bawah */

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const EquipmentTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-top: 30px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const EquipmentList = styled.ul`
  text-align: left;
  margin: 10px 0 20px 0;
  padding: 0 20px; /* Padding untuk membuat bullet terlihat */
  list-style-type: disc; /* Menambahkan tanda bullet */
  padding-bottom: 20px; /* Memberi ruang di bawah border */
  border-bottom: 2px solid #6B6B6B; /* Border bawah */

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 10px; /* Menyesuaikan padding untuk layar kecil */
  }
`;

const EquipmentItem = styled.li`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AdditionalInfo = styled.h2`
  font-size: 20px;
  color: #333;
  margin-top: 30px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AdditionalList = styled.ul`
  text-align: left;
  margin: 10px 0 20px 0;
  padding: 0 20px; /* Padding untuk membuat bullet terlihat */
  list-style-type: disc; /* Menambahkan tanda bullet */
  padding-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 10px; /* Menyesuaikan padding untuk layar kecil */
  }
`;

const AdditionalItem = styled.li`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Button = styled.h2`
  padding: 15px 100px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  background-color: #F5E553;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e55337;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;

const PaketTripDetail = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const trip = trips.find((trip) => trip.id === parseInt(tripId));

  if (!trip) {
    return <p>Paket trip tidak ditemukan</p>;
  }

  const handlePesanClick = () => {
    navigate('/Form-Pemesanan');
  };

  const handleBackClick = () => {
    navigate('/paket-trip'); // Navigasi ke halaman daftar paket trip
  };

  return (
    <DetailContainer>
      <ImageContainer>
        <BackButton onClick={handleBackClick}>&#x2190; Kembali</BackButton>
        <Image src={trip.image} alt={trip.title} />
      </ImageContainer>
      <Title>{trip.title}</Title>
      <Description>{trip.description}</Description>
      <EquipmentTitle>Saran Perlengkapan</EquipmentTitle>
      <EquipmentList>
        <EquipmentItem>Obat Pribadi</EquipmentItem>
        <EquipmentItem>Pakaian atau Jaket</EquipmentItem>
        <EquipmentItem>Cemilan</EquipmentItem>
        <EquipmentItem>Kamera Pribadi</EquipmentItem>
        <EquipmentItem>Flashdisk</EquipmentItem>
        <EquipmentItem>Sandal atau Sepatu</EquipmentItem>
        <EquipmentItem>Kebutuhan Pribadi Lainnya</EquipmentItem>
      </EquipmentList>
      <AdditionalInfo>{trip.title}</AdditionalInfo>
      <AdditionalList>
        <AdditionalItem>{trip.price}</AdditionalItem>
        <AdditionalItem>Kapan Saja</AdditionalItem>
        <AdditionalItem>Open Trip</AdditionalItem>
        <AdditionalItem>{trip.duration}</AdditionalItem>
        <AdditionalItem>Min. 2 Orang</AdditionalItem>
        <AdditionalItem>{trip.location}</AdditionalItem>
      </AdditionalList>
      <Button onClick={handlePesanClick}>Pesan Sekarang</Button>
    </DetailContainer>
  );
};

export default PaketTripDetail;
