import React,{useState} from 'react';
import entertainmentImage from './photos/Entertainment.png';
function Entertainment(){
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
   
<img src={entertainmentImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Entertainment</h1>
    <h2>DESCRIPTION</h2>
    <p>As an event planner, our entertainment services encompass sourcing and coordinating a diverse range of performers, artusts, and acts to elevate your event experience, including live music, Djs, dancers, comedians, magicians, themed entertainment, interactive activities, and special effects, all tailored to perfectly match your event theme and audience engagement goals.</p>
 <h2>Key aspects of our entertainment services include:</h2>
 <ul>
 <li><h2>Talent Selection:</h2>Identifying and booking high-quality performers acrossvarious genres, considering your event's style,budget, and desired atmosphere.</li>
 <li><h2>Performance Coordination: </h2>Managing schedules, stage setupsd, sound and lighting requirements, and backstage logistics for seamless entertainment flow.</li>
 <li><h2>Custom Entertainment Concepts:</h2>Designing unique experiences aligned with your event theme, including themed acts, interactive elements, and surprise performances.</li>
 <li><h2>Venue Assessment:</h2>Evaluting the event space to ensure optional entertainment delivery, includig stage placement, sound acoustics, and audience visibility.</li>
 <li><h2>Audience Engagement:</h2>Selecting entertainment that actively involves guests, fostering participation and creating a memorable experience.</li>
 <h2>Exmples of entertainment options we can provide:</h2>
 <li><h2>Live Bands:</h2>From acoustic duos to full-scale orchestras, catering to various musical tastes.</li>
 <li><h2>DJS:</h2>Professional DJs with diverse music genres, including themed sets and dance floor activation.</li>
 <li><h2>Solo Performers:</h2>Vocalists, instrumentalists, or specialty acts kllike jugglers or stilt walkers.</li>
 <li><h2>Theatrical Performances:</h2>Live theater productions, improve comedy troupes, orcharacter meet-and-greets.</li>
 <li><h2>Dance Troupes:</h2>Choreographed dance routines, cultural performances,or interactive dance session.</li>
 <li><h2>Interactive Activities:</h2>Photo booths, caricature artsts, trivia games, or escape room experiences.</li>
   </ul>
    </div>
   </div>
    );
}
export default Entertainment