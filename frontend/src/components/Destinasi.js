import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const DestinasiSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: left;
  padding-left: 100px;
  padding-right: 100px;
  height: 70vh;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const DestinasiContainer = styled.div`
  display: flex;
  overflow: hidden;
  padding-bottom: 20px;
  position: relative;
`;

const CardWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  width: 100%;
`;

const Card = styled.a`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex: 0 0 calc(25% - 20px); /* Adjusted for 4 cards with margin */
  margin: 0 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vw * 9 / 16); /* Maintain 9x16 ratio */
  max-height: 320px;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex: 0 0 80%; /* Show 1 card on mobile */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: white;
  z-index: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const LeftButton = styled(NavButton)`
  left: 0;
`;

const RightButton = styled(NavButton)`
  right: 0;
`;

const destinasiData = [
  { id: 1, title: 'Bali', image: 'img/destinasi-bali.jpeg', link: '/bali' },
  { id: 2, title: 'Lombok', image: 'img/destinasi-lombok.jpeg', link: '/lombok' },
  { id: 3, title: 'Yogyakarta', image: 'img/destinasi-jogja.jpeg', link: '/yogyakarta' },
  { id: 4, title: 'Jawa Tengah', image: 'img/destinasi-jawatengah.jpeg', link: '/rajaampat' },
  { id: 5, title: 'Jawa Timur', image: 'img/destinasi-jawatimur.jpeg', link: '/bromo' },
  { id: 6, title: 'Sumatera', image: 'img/destinasi-sumatera.jpeg', link: '/jakarta' },
  { id: 7, title: 'Nusa Tenggara Timur', image: 'img/destinasi-ntt.jpeg', link: '/bandung' },
  { id: 8, title: 'Nusa Tenggara Barat', image: 'img/destinasi-ntb.jpeg', link: '/surabaya' },
];

const Destinasi = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const totalCards = destinasiData.length;
  const visibleCards = 4;
  const cardWidth = 300; 

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - visibleCards * cardWidth, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) =>
      Math.min(prev + visibleCards * cardWidth, (totalCards - visibleCards) * cardWidth)
    );
  };

  return (
    <DestinasiSection>
      <SectionTitle>Destinasi</SectionTitle>
      <DestinasiContainer ref={containerRef}>
        <LeftButton onClick={scrollLeft}>&#9664;</LeftButton>
        <CardWrapper style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {destinasiData.map((destinasi) => (
            <Card key={destinasi.id} href={destinasi.link}>
              <CardImage src={destinasi.image} alt={destinasi.title} />
              <CardContent>
                <CardTitle>{destinasi.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </CardWrapper>
        <RightButton onClick={scrollRight}>&#9654;</RightButton>
      </DestinasiContainer>
    </DestinasiSection>
  );
};

export default Destinasi;
