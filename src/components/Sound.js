import React,{useState} from 'react';
import SoundImage from './photos/Sound System.png';
function Sound(){
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
 
<img src={SoundImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Sound System</h1>
    <h2>1000 Watt</h2>
    <h2>Package includes:</h2>
    <p></p>
 <ul>
    <li>2 unit Speaker Active 15 inch</li>
    <li>2 unit Wireless Mic</li>
    <li>1 unit Cable Mic</li>
    <li>1 unit Mixer + Operator</li>
    <li>Cabling System + Stand</li>
    
    </ul>
  <h2>2000 Watt</h2>
  <h2>Package includes:</h2>
  <ul>
<li>2 unit Subwoofer 18 Inch</li>
<li>2 unit Speaker Active</li>
<li>2 unit Monitor Stage</li>  
<li>2 unit Cable Mic</li>  
<li>2 unit Wireless Mic</li>
<li>1 unit Digital Mixer 20 Channel + Operator</li>  
  <li>Cabling System + Stand</li>
  </ul>
  <h2>5000 Watt</h2>
  <h2>Package includes:</h2>
  <ul>
<li>2 unit Mid Full Range Speaker</li>
<li>2 unit Subwoofer 18 Inch</li>
<li>3 unit Monitor Stage</li>  
<li>3 unit Cable Mic</li>  
<li>2 unit Wireless Mic</li>
<li>1 unit Digital Mixer 20 Channel + Operator</li>  
  <li>Cabling System + Stand</li>
  </ul>
  <h2>7000 Watt</h2>
  <h2>Package includes:</h2>
  <ul>
    <li>2 unit Mid Full Range Speaker</li>
<li>2 unit Subwoofer 18 Inch</li>
<li>2 unit Monitor Stage</li>  
<li>2 unit Cable Mic</li>  
<li>2 unit Wireless Mic</li>
<li>1 unit Digital Mixer 20 Channel + Operator</li>  
  <li>Cabling System + Stand</li>
  </ul>


    </div>
   </div>
    );
}
export default Sound