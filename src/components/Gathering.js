import React,{useState} from 'react';
import gatheringImage from './photos/Company Gathering.png';
function Gathering(){
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
 
<img src={gatheringImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Company Gatering</h1>
    <h2>DESCRIPTION</h2>
    <p>MN Event Planner is specializes in orchestrating memorable and impactful company gatherings. Our goal is to create events that not only foster team unity but also reflect the company's values and vision. From small business retreats to grand corporate celebration, we provide solutions that match your unique needs.</p>
  <h2>Services Offerings:</h2>
  <h2>1. Venue Selection and Booking:</h2>
  <ul>
    <li>Scouting and recommending venues thatresonate with the company's image.</li>
    <li>Negotiating rates and ensuring all logistical requirements are met.</li>
  </ul>
  <h2>2. Theme Development and Decor:</h2>
  <ul>
    <li>Creating themes that align with the company's objectives.</li>
    <li>Sourcing and setting up decorations, audio-visual equipment, and props.</li>
  </ul>
  <h2>3. Itinerary and Schedule Planning</h2>
  <ul>
    <li>Designing a balanced mix of leisure, team-building, and official events.</li>
    <li>Time management to ensure smooth transitions between activities.</li>
  </ul>
  <h2>4. Catering and Refreshments:</h2>
  <ul>
    <li>Collaborating with trusted caterers to provide a range of food options.</li>
    <li>Organizing cocktail hours, gala dinners, or buffet spreads as required.</li>
    </ul>
    <h2>Entertainment and Activities:</h2>
    <ul>
    <li>Curating a selection of entertainers, from bands to keynote speakers</li>
<li>Organizing workshops, games, and team-bilding exrcises.</li>

    </ul>
<h2>6. Transportation and Accommodation:</h2>
<ul>
    <li>Coodinating transportation services for attendees.</li>
    Arranging accommmodation of out-of-town guests or multi-day events.
</ul>
<h2>7. Event Documentation:</h2>
<ul>
<li>Professional Photography and Videography services to capture the event.</li>
<li>Providing post-event materials such as videos, photos, and event summaries.</li>
   </ul>
   <h2>8. Safety Security:</h2>
   <ul>
    <li>Ensuring venue safety protocols are met.</li>
    <li>Arranging security personnel if required.</li>
   </ul>
    </div>
   </div>
    );
}
export default Gathering