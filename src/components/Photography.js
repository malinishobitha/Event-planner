import React,{useState} from 'react';
import PhotographyImage from './photos/Photography.png';
function Photography(){
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
 
<img src={PhotographyImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Photography</h1>
    <h2>DESCRIPTION</h2>
    <p>A photography service description for an event plannershould highlight the ability to capture the essence of an event by providing high-quality, candid, and visually appealing images that document key moments,emotions, and atmosphere, seamlessly blending into the background to capture natural interaction while deliverisng a comprehensive set of photos ideal for marketing, social media, and event recaps, tailored to the specific needs of each event type.</p>
 <h2>Key aspects of our Phsotography Services include</h2>
 <ul>
    <li><h2>Diverse event coverage:</h2>Expertise in capturing various events like weddings, corporate conferences, galas, product launches,birthday parties, and more.</li>
    <li><h2>Candid and posed photography:</h2>Skillful in capturing both spontaneous moments and posed group shots, adapting to the event's flow and client preferences.</li>
    <li><h2>Professionalism and discretion:</h2>Ability to blend into the background while capturing important details and emotions without disrupting the event.</li>
    <li><h2>High-quality image delivery:</h2>Professional editing and timely delivery of high-resolution images in a format suitable for various marketing channels.</li>
    <li><h2>Customizable packages:</h2>Tailored photography packages to fit different event budgets and requirements, including pre-event consultation to undestand specific needs.</li>

 </ul>
 <h2>Important considerations when craftingyour description:</h2>
 <ul>
    <li><h2>Target audience:</h2>Highlight aspects most relevant to event planners, such as understanding the event flow, capturing key speakers, and capturing the overall ambiance.</li>
    <li><h2>Portfolio showcase:</h2>Emphasize your portfolio with examples of successful event photography to demonstrate your capabilities.</li>
    <li><h2>Unique selling points:</h2>Mention any special skills or techniques you utilize, likecreative lighting or aerial photography, to stad out from competitors.</li>
 </ul>
    </div>
   </div>
    );
}
export default Photography