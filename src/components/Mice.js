import React, { useState } from "react";
import miceImage from "./photos/MICE.png";

function Mice() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    date: "",
    location: "",
    guests: "",
    details: "",
    packages: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        packages: checked
          ? [...prev.packages, value]
          : prev.packages.filter((pkg) => pkg !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email) {
      alert("Please fill out all required fields.");
      return;
    }
    console.log("Form Data:", formData);
    alert("Form Submitted Successfully!");
    setShowForm(false);
  };

  return (
    <div>
      {/* Navbar */}
     
      <nav class="navbars bg-body-tertiary">
      <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => setShowForm(true)}
            >
              Get A Quote
            </button>
          </form>
      </div>
      </nav>

      {/* Form Popup */}
      {showForm && (
        <div className="quote-form">
          <div className="form-container">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              &times;
            </button>
            <h4>Get A Quote</h4>
            <form onSubmit={handleSubmit}>
              <div className="information">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="First & Last Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="date"
                  className="form-control"
                  placeholder="Wedding or Special Event Date"
                  value={formData.date}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Event Location (or Considering)"
                  value={formData.location}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="guests"
                  className="form-control"
                  placeholder="How many guests are you expecting?"
                  value={formData.guests}
                  onChange={handleChange}
                />
              </div>

              <div className="package-inform">
                <label>Package Interest In? (Select all that apply)</label>
                <div className="checkbox-group">
                  {["Full Planning + Design - Wedding", "Custom Quote Celebration", "The Bubbly Bar", "Unsure, Let's Chat"].map((pkg) => (
                    <label key={pkg}>
                      <input type="checkbox" name="packages" value={pkg} onChange={handleChange} />
                      {pkg}
                    </label>
                  ))}
                </div>
              </div>

              <div className="more-details">
                <label>More details? Tell us more about how we can help!</label>
                <textarea
                  name="details"
                  className="form-control"
                  rows="3"
                  value={formData.details}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Image */}
      <img src={miceImage} className="img-fluid contact-image" alt="Contact Us" />

      {/* MICE Event Details */}
      <div className="Mice-det">
        <h1>MICE EVENTS</h1>
        <h2>DESCRIPTION</h2>
        <p>
          MICE represents a sector of the tourism industry that organizes large-scale events, such as international conferences, trade shows, and incentive travel programs.
          These events are integral for various industries to network, grow, and achieve their objectives. Our comprehensive MICE services offer the expertise and resources
          required to plan, manage, and execute such events successfully.
        </p>

        <h2>Services Offerings:</h2>
        <h2>1. Meeting Management:</h2>
        <ul>
          <li>Venue selection and booking.</li>
          <li>Audio-visual equipment setup and technical support.</li>
          <li>Agenda creation and time management.</li>
          <li>On-site coordination.</li>
        </ul>

        <h2>2. Incentive Travel Programs:</h2>
        <ul>
          <li>Destination research and selection.</li>
          <li>Itinerary planning, including leisure and team-building activities.</li>
          <li>Travel and accommodation arrangements.</li>
          <li>Special recognition events for award recipients.</li>
        </ul>

        <h2>3. Conference Coordination:</h2>
        <ul>
          <li>End-to-End event management from conception to conclusion.</li>
          <li>Registration and attendee management.</li>
          <li>Speaker coordination and program scheduling.</li>
          <li>Exhibition and sponsor management.</li>
        </ul>

        <h2>4. Exhibition Organization:</h2>
        <ul>
          <li>Stall design and setup.</li>
          <li>Visitor registration and engagement.</li>
          <li>Promotion and marketing of the exhibition.</li>
          <li>Logistics and supply chain management.</li>
        </ul>

        <h2>Key Features:</h2>
        <ul>
          <li><strong>Dedicated Event Manager:</strong> Our seasoned professionals ensure every detail is looked after.</li>
          <li><strong>Global Network:</strong> Access to an extensive list of venues, suppliers, and vendors across the globe.</li>
          <li><strong>Customizable Packages:</strong> Services tailored to fit every budget and requirement.</li>
          <li><strong>Latest Technology:</strong> Use of modern software and tools for registration, attendee tracking, and feedback collection.</li>
          <li><strong>Sustainability:</strong> Efforts to minimize the environmental footprint of events.</li>
        </ul>
      </div>
    </div>
  
  );
}

export default Mice;
