import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
  background-image: url('img/home2.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
  padding-left: 100px;

  @media (max-width: 768px) {
    height: 100%;
    padding: 20px 15px;
    padding-left: 20px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroButton = styled.button`
  padding: 15px 30px;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  background-color: #F5E553;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #e55337;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/paket-trip');
  };

  return (
    <HeroSection>
      <HeroTitle>Liburan Aman <br/>Harga Nyaman</HeroTitle>
      <HeroButton onClick={handleButtonClick}>Pesan Sekarang</HeroButton>
    </HeroSection>
  );
};

export default Hero;
