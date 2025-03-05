import React, {useState} from 'react';
import MultimediaImage from './photos/Multimedia.png';
function Multimedia(){
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
  
<img src={MultimediaImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Multimedia</h1>
    <h2>DESCRIPTION</h2>
    <p>A multimedia service for an event planner encompasses the creation and management of a diverse range of digital media elementsto enhanve an event's  visual appeal, engagement, and communication, including live streaming, video production, interactive displays, social media content, presentations, and graphic design, all tailored to effectively promote and deliver the event experience across various platforms.</p>
 <h2>Key elements of multimedia services for event planners:</h2>
 <ul>
    <li><h2>Pre-event promotion</h2></li>
    <li><strong>Event website design:</strong>A visually engaging website to showcase event details, registration, speaker information, and event branding.</li>
    <li><strong>Social media marketing campaigns:</strong>Strategic content creation and distribution across platforms like Facebook, Instagram, Twitter to build anticipation and drive registration</li>
 <li><strong>Video teasers and trailers:</strong>Short, captivating videos to highlight event highlights and key speakers.</li>
 <li><strong>Email marketing Campaigns:</strong>Targeted email blasts to keep atttendees informed about updates and important event details.</li>
 </ul>
 <ul>
    <li><h2>Live event production:</h2></li>
    <li><strong>Live streaming:</strong>Broadcasting the event in real-time to virtual attendees through platforms like youTube or dedicated event platforms.</li>
    <li><strong>Video recording:</strong>Capturing key moments and presentations for post-event content.</li>
    <li><strong>On-site digital displays:</strong>Interctive screens showcasing event agenda, speakers with inntegrated multimedia elements like graphics, animations, and videos.</li>
    <li><strong>presentation design:</strong>Creating visually appealing slides for speakers with integrated multimedia elements like graphics, animations, and videos.</li>
    </ul>
    <ul>
        <li><h2>Post event engagement:</h2></li>
        <li><strong>Event highlights video:</strong>A compiled video showcasing the best moments of the event for post-event ppromotion and sharing.</li>
        <li><strong>Photo gallery</strong>Capturing and sharing high-quality event photos on social media and the event website.</li>
        <li><strong>Social media recap:</strong>Compiling social media posts and engagementsurrounding the event to measure impact. </li>
        <li><strong>On-demand video access:</strong>Providing recorded sessions from the event to attendees who couldn't attend live.</li>
    </ul>
    <ul>
        <h2>Benefits of multimedia services for event planners</h2>
        <li><strong>Increased audience reach:</strong>Broden event exposure through live streaming and online content.</li>
        <li><strong>Enhanced engagement:</strong>Interactive elements like polls and social media integration keep attendees actively involved.</li>
        <li><strong>Professional brand image:</strong>High-quality visual content reinforces the events's professionalism and brand identity.</li>
         <li><strong>Measurable results:</strong>Analytics from digital platforms allow for tracking event impact and ROI.</li>
    </ul>

    </div>
   </div>
    );
}
export default Multimedia