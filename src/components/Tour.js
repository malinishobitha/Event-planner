import React,{useState} from 'react';
import TourImage from './photos/Tour.png';
function Tour(){
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
  
<img src={TourImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Tour Organiser</h1>
    <h2>DESCRIPTION</h2>
    <p>Welcome to MN Event tour Organizer Services! Our passion is curating unforgettable journeys, bringing together like-minded adventurers, and revealing the hidden gems of our planet. With over a decade of expertise in tailoring experiences for the curious traveler, we pride ourselves on being more than just tour organizers - we are your travel storytellers!</p>
 <h2>Why Choose Bali tour organizer?</h2>
 <p><strong>1. Personalized Touch:</strong>Every tour is crafted keeping our travelers in mind. Tell us your dream holiday, and we'll make it come true.</p>
 <p><strong>2. Expertise at Hand:</strong>Our local guides have in-depth knowledge about the history, culture, and secrets of the destinations.</p>
 <p><strong>3. Safety First:</strong>Our top priority is the safety and well-being of our travelers.</p>
 <p><strong>4. Eco-Conscious Journeys:</strong>We believe in sustainable tourism, ensuring minimal impact on the environment and maximizing benefits for local communities</p>
   <h2>Our Services:</h2>
   <p><strong>1. Guided Group Tours:</strong>Travel with a group of like-minded adventurers, explore new  destinations, and forge lifelong memories</p>
   <p><strong>2. Customized Private Tours:</strong>Craft your itinerary, choose your accommodation, and travel at your own pace.</p>
   <p><strong>3. Adventure Expenditions:</strong>Fot the adrenaline junkies - from mountain trekking to deep-sea diving, we've got it all.</p>
   <p><strong>4. Cultural Immersions:</strong>Dive deep into local traditions, cuisines, and festivites. Experience the world like a locla!</p>
   <p><strong>5. Corporate Retreats:</strong>Team building in the wilderness or brainstorming by the beach? We've got you covered.</p>
    </div>
   </div>
    );
}
export default Tour