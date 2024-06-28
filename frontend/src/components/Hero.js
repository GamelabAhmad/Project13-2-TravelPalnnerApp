import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = styled.section`
  background-image: url('img/home2.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
  padding-top: 100px; /* Menyesuaikan dengan tinggi Navbar */
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const HeroButton = styled(Button)`
  padding: 15px 30px;
  font-size: 20px;
  border-radius: 4px;
  background-color: #F5E553;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #e55337;
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/paket-trip');
  };

  return (
    <HeroSection>
      <Container fluid>
        <Row>
          <Col lg={6} md={8} sm={10} xs={12}>
            <HeroTitle>Liburan Aman <br />Harga Nyaman</HeroTitle>
            <HeroButton onClick={handleButtonClick}>Pesan Sekarang</HeroButton>
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default Hero;
