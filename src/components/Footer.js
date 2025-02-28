import React from "react";
import logo from './photos/logo.png';
import location from './photos/location.png';
import phone from './photos/phone.png';
import email from './photos/email.png';
import './css/Footer.css';
function Footer() { 
    return (
        <div className="Container-Fluid">
            <div className="Footer">
                <div className="Footer-details">
                    <div className='Footer-det1'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className="Footer-det">
                        <h1>QUICK LINKS</h1>
                        <h5>About Us</h5>
                        <h5>All Events</h5>
                        <h5>Our Work</h5>
                        <h5>Contact Us</h5>
                        <h5>Blog</h5>
                        <h5>Privacy Policy</h5>
                    </div>
                    <div className="Footer-det">
                        <h1>EVENT SERVICES</h1>
                        <h5>MICE Event</h5>
                        <h5>Product Launching Events</h5>
                        <h5>Company Gathering</h5>
                        <h5>Team Building</h5>
                        <h5>Themed Dinner</h5>
                        <h5>Tour Organizer</h5>
                        <h5>Sound System</h5>
                        <h5>Lighting & Entertainment</h5>
                    </div>
                    <div className="Footer-det contact-info">
                        <p><img src={location} alt="location" /> XYZ, ABC, Chennai, India</p>
                        <p><img src={phone} alt='phone' /> +91 9123456789</p>
                        <p><img src={email} alt='email' /> Connect@mneventplanner.com</p>
                    </div>
                </div>
                <div className="socialmedia">
               
                    <h5>Follow Us @ </h5>
                    <div className="social-icons">
                       <i className="bi bi-facebook"></i>
                       <i className="bi bi-instagram"></i>
                       <i className="bi bi-twitter"></i>
                        <i className="bi bi-youtube"></i>
                       <i className="bi bi-whatsapp"></i>
                    </div>
                    <p>&copy; 2025 MN Event Planner. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
