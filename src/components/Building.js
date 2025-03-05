import React,{useState} from 'react';
import BuildingImage from './photos/Team Building.png';
function Building() {
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
    
            <img src={BuildingImage} className="img-fluid contact-image" alt="Contact Us" />
            <div className='Mice-det'>
                <h1>Team Building </h1>
                <h2>DESCRIPTION</h2>
                <p>The Benefits of Being a Team-Building Event Organizer Organizing a team-building event is more than just planning activities; 
                    it's about fostering a positive and collaborative 
                    environmental than enhances team dynamics

                and drives organizational success.  Here are some compelling reasonss why stepping into th reole of a team-building evemnt organizer is beneficial</p>

                <h2>1.Enhanced Leadership Skills</h2>
                    <p>Organizing a team-building event hones your leadeshipabilities.  You'll learn to manage diverse groups, delegate tasks effectively, 
                        and resolve confifks effciently.  These skills are invaluable and transferable to aby leadeship role within the organization. </p>
                <h2>2.Improved Project Management </h2>
               <p>From coceptualizing the event to itsexecution organizinga team-builing event material skills, making you adept at handling complex task and project in this future.</p>
                <h2>3. Strengthend Relationships</h2>
                <p>As an organizer, you have the Opportunity to interact with team members from various departments.  This not only broadens your professional network but also helps  in building strong interpersonal relationships that can lead to better collaboration and communication within the workplace.</p>
                <h2>4. Increased Creativity and Innovation</h2>
                <p>Designing engaging and meaningful activities requires creativity and out-of-the-box thinking.  This process stimulates your innovative thinking, encouraging you to develop unique solutions and ideas that can be applied beyond the event.</p>
                <h2>5. Boosted Morale and Team Spirit</h2>
              <p>Seeing the positive impact of your efforts on team morale and spirit can be incredibly fulfilling.  As an Organizer, you play a pivotal role in creating a fun and supportive atmosphere that fosters camaraderie and boosts overall team satisfaction.</p>
<h2>6. Personal and Professional Growth</h2>
<p>Taking on the responsibility of organizing a team-building event provides a platform for personal and professional growth.  You'll gain confidence in your abilities, learn new skills, and enhane your resume with a demostrable track record of successful event planning and team leadership</p>
<h2>7. Recognition and Appreciation</h2>
<p>Successfully organizing a team-building event often leads to recognition from peers and management. This acknowledgment can open doors to new  opportunities, promotions, and career advancements within your Organizations.</p>
<h2>Fostering a Positive Work Culture</h2>
<p>By organizing a team-building event, you contribute to creating a positive work culture.  A well-planned evet can improve employee engagement, reduce stress,and promote a 
    senseof belonging, all of which are crucial for a thriving workplace.</p>
            </div>
        </div>
    );
}
export default Building