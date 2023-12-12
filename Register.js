import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        uname: '',
        email: '',
        pswd: '',
        cpswd: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = async () => {
        if (formData.pswd !== formData.cpswd) {
            alert('Passwords do not match.');
        } else if (!formData.uname || !formData.email || !formData.pswd || !formData.cpswd) {
            alert('All fields are required.');
        } else if (formData.pswd.length < 8) {
            alert('Length of Password must be at least 8');
        } else {
            try {
                const response = await fetch('http://localhost:8081/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        uname: formData.uname,      
                        email: formData.email,
                        pswd: formData.pswd,
                    }),
                });

                if (response.ok) {
                    // Registration successful, navigate to the login page
                    navigate('/');
                } else {
                    const data = await response.json();
                    alert(`Error: ${data.error || 'Something went wrong.'}`);
                }
            } catch (error) {
                console.error('Error during registration:', error);
                alert('Something went wrong, please try again');
            }
        }
    };

    return (
        <div className='box'>
            <h1>Sign Up</h1>
            <div className='inputtypes'>
                <input type='textbox' name='uname' placeholder='Name' onChange={handleInputChange} required />
                <input type='email' name='email' placeholder='Email' onChange={handleInputChange} required />
                <input type='password' name='pswd' placeholder='Password' onChange={handleInputChange} required />
                <input type='password' name='cpswd' placeholder='Confirm Password' onChange={handleInputChange} required />
            </div>
            <div className='submit'>
                <button type='submit' name='submit' value="Submit" onClick={handleRegister}>Submit </button>
            </div>
        </div>
    );  
};

export default Register;
