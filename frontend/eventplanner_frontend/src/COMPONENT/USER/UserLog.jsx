import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserLog.css';

export default function UserLog() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    if (e.target.name === 'email') {
      setForm({ ...form, email: e.target.value });
    }
    if (e.target.name === 'password') {
      setForm({ ...form, password: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:7076/login', form)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('admin', JSON.stringify(res.data));
        navigate('/UserHome');
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          setErrorMsg('Incorrect email or password.');
        } else {
          setErrorMsg(err.response.data.errorMsg);
          navigate('/')
        }
      });
  };

  return (
    <div>
      <title>User Login</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <form id="formN" onSubmit={handleSubmit}>
        <h2 id="hTwoText">User Login</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleInputChange} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleInputChange} required />
        <button type="submit">Login</button>
        <div classname="form-footer">
          
          <a href="/UserCreateAccount">Create Account</a>
        </div>
      </form>
    </div>
  );
}