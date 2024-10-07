import React, { useState } from 'react';
import axios from 'axios';
import './register.css'; // Import the external CSS file
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', phone: '', address: ''
    });

    const { name, email, password, phone, address } = formData;

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post('http://localhost:9000/api/v1/user/register', formData);
            
            // Check if registration was successful
            if (res.status === 201) { // Assuming 201 is the status code for successful registration
                alert(res.data.msg);
                navigate('/login'); // Navigate to the login page on success
            }
        } catch (err) {
            alert('Error during registration');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" className="form-input" /> 
                <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" className="form-input" /> 
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" className="form-input" />
                <input type="text" name="phone" value={phone} onChange={handleChange} placeholder="Phone" className="form-input" /> 
                <input type="text" name="address" value={address} onChange={handleChange} placeholder="Address" className="form-input" /> 
                <button type="submit" className="submit-btn">Register</button><br/>
                <p className="signup-text">Already have an account? <a href="/Login">Login</a></p>
            </form>
        </div>
    );
};

export default Register;
