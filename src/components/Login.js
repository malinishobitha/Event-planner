import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login Successful!");
    };

    return (
        <div className="container mt-5 login-container">
            <form className="p-4" onSubmit={handleSubmit}>
                <h2 className="text-center mb-3">LOGIN / REGISTER</h2>
                <div className="mb-3 login-input">
                    <label className="form-label"></label>
                    <input type="text" className="form-control placeholder-icon name-icon" name="name" placeholder="👤 Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3 login-input">
                    <label className="form-label"></label>
                    <input type="tel" className="form-control placeholder-icon phone-icon" name="phone" placeholder="📞 Contact" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3  login-input">
                    <label className="form-label"></label>
                    <input type="email" className="form-control placeholder-icon email-icon" name="email" placeholder="✉️ Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3 login-input">
                    <label className="form-label"></label>
                    <input type="password" className="form-control placeholder-icon lock-icon" name="password" placeholder="🔒 Password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary w-100  login-button">Connect</button>
            </form>
        </div>
    );
}

export default Login;
