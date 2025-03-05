import React,{useState} from 'react';
import LightingImage from './photos/Light.png';
function Lighting(){
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
 
<img src={LightingImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Lighting</h1>
    <h2>DESCRIPTION</h2>
    <h2>Package 1</h2>
    <h2>Package includes</h2>
<ul>
    <li>4 pcs Par LED 54x3 + Stand</li>
    <li>2 pcs Moving Head </li>
    <li>2 pcs Halogen</li>
    <li>1 pcs Lighting Control</li>
    <li>1 pcs Cable Electric & Signal</li>
   
    </ul>
    <h2>Package 2</h2>
    <h2>Package includes</h2>
<ul>
    <li>8 pcs Par LED 54x3 + Stand</li>
    <li>2 pcs Moving Head </li>
    <li>2 pcs Halogen</li>
    <li>1 pcs Smoke Machine</li>
    <li>1 pcs Lighting Control</li>
    <li>1 pcs Cable Electric & Signal</li>
   
    </ul>
    <h2>Package 3</h2>
    <h2>Package includes</h2>
<ul>
    <li>8 pcs Par LED 54x3 + Stand</li>
    <li>2 pcs Moving Head </li>
    <li>2 pcs Halogen</li>
    <li>1 pcs Lighting Control</li>
    <li>1 pcs Cable Electric & Signal</li>
   
    </ul>
    <h2>Package 4</h2>
    <h2>Package includes</h2>
<ul>
    <li>12 pcs Par LED 54x3 + Stand</li>
    <li>4 pcs Moving Head </li>
    <li>4 pcs Halogen</li>
    <li>1 pcs Lighting Control</li>
    <li>1 pcs Cable Electric & Signal</li>
   
    </ul>
    </div>
   </div>
    );
}
export default Lighting