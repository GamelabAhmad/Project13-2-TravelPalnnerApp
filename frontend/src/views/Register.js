import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  margin-top: 3.5rem;
`;

const RegisterBox = styled.div`
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

const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async() => {
    try {
      
      // alert(`Registering with Name: ${name}, Phone: ${phone}, Address: ${address}, Email: ${email}`);
      const response = await axios.post('http://localhost:8943/auth/register', {
        name, phone, address, email, password
      });

      // Redirect ke halaman login setelah berhasil registrasi
      if (response.status === 201) {
        navigate('/login');
      }
      console.log('register successful', response.data);
    } catch (err) {
      // set error untuk menampilkan pesan error
      if (err.response && err.response.status === 400) {
        const newErrors = {};
        err.response.data.errors.forEach((er) => {
          console.log(er)
            newErrors[er.param] = er.msg;
        });
          setErrors(newErrors);
      } else {
          console.error(err);
      }
    }      
  };

  const handleGoogleRegister = () => {
    alert('Registering with Google');
  };

  return (
    <RegisterContainer>
      <RegisterBox>
        <Title>Register</Title>
        <Input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <Input 
          type="text" 
          placeholder="Phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}

        <Input 
          type="text" 
          placeholder="Address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
        />
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}

        <Button onClick={handleRegister}>Register</Button>
        <Button onClick={handleGoogleRegister}>Register with Google</Button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </RegisterBox>
    </RegisterContainer>
  );
};

export default Register;
