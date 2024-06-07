
import React, { useState } from 'react';
import styled from 'styled-components';
import FormPemesanan from './FormPemesanan'; 

const PaketTripSection = styled.section`
  padding: 100px 20px;
  background-color: #F0F0F0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  color: #333;
  margin-left: 80px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 0;
  }
`;

const ShowMoreButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-right: 80px;
  background-color: #000000;
  color: white;
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

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 90%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin: 0 0 10px 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const CardDetailText = styled.p`
  font-size: 14px;
  color: #777;
  margin-left: 8px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const CardPrice = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const Button = styled.button`
  padding: 8px 10px;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  background-color: #000000;
  color: white;
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

const trips = [
  { id: 1, image: 'img/kelingking.jpg', title: 'Kelingking Beach', duration: '2 Hari', location: 'Nusa Penida Bali, Indonesia', price: 'Rp 1.200.000', region: 'bali' },
  { id: 2, image: 'img/komodo.jpg', title: 'Pulau Komodo', duration: '2 Hari', location: 'NTB, Indonesia', price: 'Rp 1.500.000', region: 'ntb' },
  { id: 3, image: 'img/borobudur.jpg', title: 'Candi Borobudur', duration: '1 Hari', location: 'Magelang, Indonesia', price: 'Rp 400.000', region: 'jawa_tengah' },
  { id: 4, image: 'img/Gambar-Trip1.jpeg', title: 'Pantai Gunungkidul', duration: '1 Hari', location: 'Yogyakarta, Indonesia', price: 'Rp 300.000', region: 'yogyakarta' },
  { id: 5, image: 'img/bromo.jpg', title: 'Gunung Bromo', duration: '1 Hari', location: 'Bromo, Indonesia', price: 'Rp 350.000', region: 'jawa_timur' },
  { id: 6, image: 'img/kawah-ijen.jpg', title: 'Kawah Ijen', duration: '2 Hari', location: 'Banyuwangi, Indonesia', price: 'Rp 1.200.000', region: 'jawa_timur' },
  { id: 7, image: 'img/Pantai-Kuta.jpg', title: 'Kuta Beach', duration: '2 Hari', location: 'Nusa Penida Bali, Indonesia', price: 'Rp 800.000', region: 'bali' },
  { id: 8, image: 'img/dieng.jpg', title: 'Wisata Dieng', duration: '1 Hari', location: 'Wonosobo, Indonesia', price: 'Rp 300.000', region: 'jawa_tengah' },
  { id: 9, image: 'img/Gambar-Trip1.jpeg', title: 'Raja Ampat', duration: '3 Hari', location: 'Papua Barat, Indonesia', price: 'Rp 2.000.000', region: 'ntt' },
  { id: 10, image: 'img/danau-toba.jpg', title: 'Danau Toba', duration: '2 Hari', location: 'Sumatera Utara, Indonesia', price: 'Rp 1.000.000', region: 'sumatera' },
];

const PaketTrip = () => {
  const [showMore, setShowMore] = useState(false);
  const [showForm, setShowForm] = useState(false); // State untuk menampilkan/menyembunyikan form pemesanan
  const [selectedTrip, setSelectedTrip] = useState(null); // State untuk menyimpan trip yang dipilih

  const displayedTrips = showMore ? trips : trips.slice(0, 3);

  // Fungsi untuk menampilkan form pemesanan saat tombol "Pesan Sekarang" diklik
  const handlePesanSekarangClick = (trip) => {
    setSelectedTrip(trip); // Set trip yang dipilih ke dalam state
    setShowForm(true); // Tampilkan form pemesanan
  };

  return (
    <PaketTripSection>
      <HeaderContainer>
        <SectionTitle>Paket Trip</SectionTitle>
        <ShowMoreButton onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Tampilkan Lebih Sedikit' : 'Selengkapnya'}
        </ShowMoreButton>
      </HeaderContainer>
      <CardsContainer>
        {displayedTrips.map((trip) => (
          <Card key={trip.id}>
            <CardImage src={trip.image} alt={trip.title} />
            <CardContent>
              <CardTitle>{trip.title}</CardTitle>
              <CardDetail>
                <img src="img/Lokasi.jpeg" alt="Location Icon" style={{ width: '16px', height: '16px' }} />
                <CardDetailText>{trip.location}</CardDetailText>
              </CardDetail>
              <CardDetail>
                <img src="img/Waktu.jpeg" alt="Duration Icon" style={{ width: '16px', height: '16px' }} />
                <CardDetailText>{trip.duration}</CardDetailText>
              </CardDetail>

              <CardFooter>
                <CardPrice>{trip.price}</CardPrice>
                <Button onClick={() => handlePesanSekarangClick(trip)}>Pesan Sekarang</Button>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
      {/* Menampilkan form pemesanan jika showForm bernilai true */}
      {showForm && <FormPemesanan trip={selectedTrip} setShowForm={setShowForm} />}
    </PaketTripSection>
  );
};

export default PaketTrip;