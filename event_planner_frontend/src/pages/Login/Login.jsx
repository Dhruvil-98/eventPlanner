import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Importing the external CSS

const Login = () => {
    const [formData, setFormData] = useState({
        email: '', password: ''
    });

    // const { email, password } = formData;
    //const { email, password } = formData;
    const { email, password } = formData;

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:9000/api/v1/user/login', formData); // Replace with your backend URL
            alert(res.data.msg); // You might want to redirect user to a dashboard upon success
        } catch (err) {
            alert('Error during login');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    className="form-input" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    placeholder="Password" 
                    className="form-input" 
                    required 
                />
                <button type="submit" className="submit-btn">Login</button>
                <p className="signup-text">Don't have an account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    );
};

export default Login;
