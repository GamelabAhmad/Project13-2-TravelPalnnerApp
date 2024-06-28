import React, { useState } from 'react'; // Tambahkan ini
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import { parseJwt } from '../utils/parseJwt';
import getBaseUrl from '../utils/getBaseUrl';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginBox = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #87CEEB;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #00BFFF;
  }
`;

const Login = () => {
  const [email, setEmail] = useState(''); // Ini sudah ada, tapi perlu impor useState di bagian atas
  const [password, setPassword] = useState(''); // Ini juga sudah ada

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8943/auth/login', {
        email,
        password
      });
      // Lakukan sesuatu dengan respons, misalnya menyimpan token atau mengarahkan pengguna
      if(res.status === 200){
        const now = Date.now() / 1000;
        const exp = parseJwt(res.data.token).exp;
        const expiryDate = (exp - now) / 3600;
        Cookies.set('accessToken', res.data.token, { expires: expiryDate }); // Set token  cookie
        res.data && (window.location.href = getBaseUrl() + '/')
      }
    } catch (error) {
      console.error('Login failed', error);
      throw error;
      // Tangani error, misalnya menampilkan pesan error kepada pengguna
    }
  };

  const handleGoogleLogin = () => {
    alert('Logging in with Google');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleGoogleLogin}>Login with Google</Button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
