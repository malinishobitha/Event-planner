import React,{useState} from 'react';
import cateringImage from './photos/Themed Catering.png';
function Catering(){
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
  
<img src={cateringImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Themed Catering</h1>
    <h2>DESCRIPTION</h2>
    <p>Each of these themes offers a unique dining experience, transporting guests to a different time or place, and making the evening truly unforgettable.  A comprehensive catering service for event planners provides customized menus, expert food preparation and presentation, attentive on-site service, and seamless logistics management, tailored to the specific needs of each event, ensuring a memorable culinary experience for guests while aligning with the overall event vision and budget.</p>
 <ul>
    <li><strong>Hollywood Glamour</strong></li>
    <li><strong>Mediterranean Mirage</strong></li>
    <li><strong>Retro Radiance</strong></li>
    <li><strong>Tropical Paradise</strong></li>
    <li><strong>Masquerade Ball</strong></li>
    <li><strong>Nautical Nights</strong></li>
    <li><strong>Midnight in Paris</strong></li>
    <li><strong>Safari Supper</strong></li>
    </ul>
  <h2>Key points to highlight in a catering services description from MN Event Planners:</h2>
  <ul>
<li><h2>Menu Customization:</h2>Ability to create unique menus based on dietary restrictions, cultural considerations, and client preferences, inluding options for hors d'oeuvres, buffets, plated meals, and dessert spreads.</li>
<li><h2>Professional Staff:</h2>Highly trained waitstaff and culinary team to deliver exceptional service and food quality throughout the event </li>
<li><h2>Flexible Options:</h2>Catering to various event types like weddings, corporate  gathering, conferences, birthhday parties, and more.</li>  
<li><h2>On-Site Management:</h2>Coordination with event planners to ensure smooth food service execution, including timing, presentation, and any special requests.</li>  
<li><h2>Logistics Expertise:</h2>Handling food delivery, setup, breakdown, and proper sanitation procedures.</li>
<li><h2>Budget-Friendly Solutions</h2>Providing diverse menu options to fit different budget constraints while maintaining quality standards.</li>  
  </ul>

    </div>
   </div>
    );
}
export default Catering