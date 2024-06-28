import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { parseJwt } from '../utils/parseJwt';
import Cookies from 'js-cookie';
import axios from 'axios';

const StyledNavbar = styled(Navbar)`
  background-color: #87CEEB;
  z-index: 1000; /* Pastikan z-index lebih tinggi dari hero */
`;

const LogoImage = styled.img`
  height: 80px;
  cursor: pointer;
`;

const SearchContainer = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  gap: 7px;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled(FormControl)`
  max-width: 500px;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const LinkText = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 0;
  margin-bottom : -100 px;
  font-weight : bold;

  &:hover {
    text-decoration: underline;
  }
`;
const Text = styled.h5`
  color: black;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 0;
  margin : 0;
  font-weight : bold;
`;

const CustomButton = styled(Button)`
  background-color: #ffffff;
  color: black;
  border: none;

  &:hover {
    background-color: #ff6347;
  }
`;

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState(parseJwt(Cookies.get('accessToken')));
  const [searchTerm, setSearchTerm] = useState('');
  const [destination, setDestination] = useState('');

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogOut = async() => {
   try {
    const res = await axios.post('http://localhost:3001/auth/logout',{});
    if(res.status === 200){
      Cookies.remove('accessToken');
      setUser(null);
      navigate('/login');
    }
   } catch (error) {
    
   }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (destination) {
      navigate(`/paket-trip?destination=${destination}&query=${searchTerm}`);
    } else {
      alert('Silakan pilih destinasi.');
    }
  };

  useEffect(()=>{
    setUser(parseJwt(Cookies.get('accessToken')))
  },[])

  return (
    <StyledNavbar fixed="top" expand="lg" variant="light">
      <Container>
        <Navbar.Brand onClick={handleLogoClick}>
          <LogoImage src="img/Logo-Travel.png" alt="Logo-Travel" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ?
              <Nav className="me-auto">
                <SearchContainer inline onSubmit={handleSearch}>
                  <Form.Select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    style={{ maxWidth: '200px', marginRight: '10px' }}
                  >
                    <option value="">--Pilih Destinasi--</option>
                    <option value="bali">Bali</option>
                    <option value="lombok">Lombok</option>
                    <option value="jawa-tengah">Jawa Tengah</option>
                    <option value="yogyakarta">Yogyakarta</option>
                    <option value="jawa-timur">Jawa Timur</option>
                    <option value="sumatera">Sumatera</option>
                    <option value="ntt">NTT</option>
                    <option value="ntb">NTB</option>
                  </Form.Select>
                  
                  <CustomButton type="submit">Cari</CustomButton>
                </SearchContainer>
              </Nav>
            : <div style={{ width: '85%'}}/>}
          <UserActions>
            <img src="img/Login.png" alt="Login Icon" style={{ width: '50px', height: '50px' }} onClick={handleLoginClick} />
            {user
              ?
              <>
            <Text >{user.name} </Text> |
            <LinkText onClick={handleLogOut}>Log Out </LinkText>
              </>
              :
            <LinkText onClick={handleLoginClick}>Log In </LinkText>
            }
          </UserActions>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavbarComponent;
