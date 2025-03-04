import React, { useState, useEffect } from "react";
import decoration from "./photos/single-line-border-designs-png-11552244732sjrezje5st-removebg-preview.png";
import contactImage from "./photos/Contact Us.png";

function Drop() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        choice: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    useEffect(() => {
        const savedData = localStorage.getItem("contactForm");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contactForm", JSON.stringify(formData));
    }, [formData]);

    const validate = () => {
        let newErrors = {};

        if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Only alphabets are allowed";
        }

        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
            newErrors.email = "Enter a valid email (example@gmail.com)";
        }

        if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = "Only numbers are allowed";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            localStorage.removeItem("contactForm"); 
            setFormData({ name: "", email: "", phone: "", choice: "", message: "" }); 
        }
    };

    return (
        <div className="container-fluid">
            <div className="service-head">
                <h1>CONTACT US</h1>
                <img src={decoration} alt="Decorative Line" />
            </div>
            <img src={contactImage} className="img-fluid contact-image" alt="Contact Us" />
            <div className="container">
                <h1 className="contact">PLEASE FILL THE FORM</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>*Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}

                    <label>*Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <label>*Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <span className="error">{errors.phone}</span>}

                    <label>Choice: Events | Team Building | MICE | Tour Organizer | Equipment | Entertainment & Others</label>
                    <input type="text" name="choice" value={formData.choice} onChange={handleChange} />

                    <label>*Your Message</label>
                    <input type="text" name="message" value={formData.message} onChange={handleChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Drop;
