import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NTTSection = styled.section`
  padding: 100px 20px;
  background-color: #F0F0F0;
  text-align: center;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
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
  cursor: pointer;

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

const nttDestinasiData = [
    { id: 1, image: 'img/komodo.jpg', title: 'Pulau Komodo', duration: '2 Hari', location: 'NTB, Indonesia', price: 'Rp 1.500.000', region: 'ntt' },
];

const DestinasiNTT = () => {
  const navigate = useNavigate();

  const handlePesanClick = () => {
    navigate('/Form-Pemesanan');
  };

  const handleCardClick = (destinasiId) => {
    navigate(`/trip/${destinasiId}`);
  };

  return (
    <NTTSection>
      <SectionTitle>Destinasi di Nusa Tenggara Timur</SectionTitle>
      <CardsContainer>
        {nttDestinasiData.map((destinasi) => (
          <Card key={destinasi.id} onClick={() => handleCardClick(destinasi.id)}>
            <CardImage src={destinasi.image} alt={destinasi.title} />
            <CardContent>
              <CardTitle>{destinasi.title}</CardTitle>
              <CardDetail>
                <img src="img/Lokasi.jpeg" alt="Location Icon" style={{ width: '16px', height: '16px' }} />
                <CardDetailText>{destinasi.location}</CardDetailText>
              </CardDetail>
              <CardDetail>
                <img src="img/Waktu.jpeg" alt="Duration Icon" style={{ width: '16px', height: '16px' }} />
                <CardDetailText>{destinasi.duration}</CardDetailText>
              </CardDetail>
              <CardFooter>
                <CardPrice>{destinasi.price}</CardPrice>
                <Button onClick={(e) => {
                  e.stopPropagation(); // Menghentikan event bubbling agar navigasi ke halaman detail tidak terjadi
                  handlePesanClick();
                }}>Pesan Sekarang</Button>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </NTTSection>
  );
};

export default DestinasiNTT;
