import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #87CEEB;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
`;

const LogoImage = styled.img`
  height: 80px;
  padding-left: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  gap: 7px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 15px;
  border-radius: 4px;
  border: none;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

const Dropdown = styled.select`
  padding: 15px;
  border-radius: 4px;
  border: none;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const UserActions = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 80px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 15px 16px;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #ff6347;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const LinkText = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 0px;
  padding-right: 40px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;


const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [destination, setDestination] = useState('');

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSearch = () => {
    onSearch(searchTerm, destination);
  };

  return (
    <NavbarContainer>
      <LogoContainer onClick={handleLogoClick}>
        <LogoImage src="img/Logo-Travel.png" alt="Logo-Travel.img" />
      </LogoContainer>
      <SearchContainer>
        <Dropdown value={destination} onChange={(e) => setDestination(e.target.value)}>
          <option value="">--Pilih Destinasi--</option>
          <option value="kelingking">Bali</option>
          <option value="komodo">Lombok</option>
          <option value="borobudur">Jawa Tengah</option>
          <option value="gunungkidul">Yogyakarta</option>
          <option value="bromo">Jawa Timur</option>
          <option value="kawahijen">Sumatera</option>
          <option value="kutabeach">NTT</option>
          <option value="dieng">NTB</option>
        </Dropdown>
        <SearchInput 
          type="text" 
          placeholder="Cari tempat..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <Button onClick={handleSearch}>Cari</Button>
      </SearchContainer>
      <UserActions>
        <img src="img/Login.png" alt="Login Icon" style={{ width: '50px', height: '50px' }} onClick={handleLoginClick} />
        <LinkText onClick={handleLoginClick}>Log In<br />Register</LinkText>
      </UserActions>
    </NavbarContainer>
  );
};

export default Navbar;
