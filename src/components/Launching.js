import React,{useState} from 'react';
import launchImage from './photos/Product Launch.png';
function Launching(){
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
 
<img src={launchImage} className="img-fluid contact-image" alt="Contact Us" />
 <div className='Mice-det'>
    <h1>Product Launch Events </h1>
    <h2>DESCRIPTION</h2>
    <p>Launching a new product is a pivotal moment for any business.  It demands a mix of strategic planning, market understanding, and impeccable execution. Our Product Launching service is designed to guide brands through this complex process, ensuring a successful and impactful introduction of their product to the target market.</p>
  <h2>Services Offerings:</h2>
  <h2>1.Market Research and Analysis:</h2>
  <ul>
    <li>Insight into target audience behavior and preferences.</li>
    <li>Competitive abalysis to determine positioning.</li>
    <li>Indentification of potential opportunities and challenges.</li>
  </ul>
  <h2>2. Strategic Planning:</h2>
  <ul>
    <li>Defining clear launch objectives.</li>
    <li>Timeline creation and milestone setting.</li>
    <li>Resources allocation and budgeting.</li>
  </ul>
  <h2>3. Brand and Messaging Strategy:</h2>
  <ul>
    <li>Creation ofcompelling narratives around the product.</li>
    <li>Design of branding elements consistent with company identity.</li>
    <li>Content strategu for promoktional materials</li>
  </ul>
  <h2>4. Media and PR Management:</h2>
  <ul>
    <li>Media Kit Development.</li>
    <li>Press release distribution to relevant outlets.</li>
    <li>Coordinating interviews, features, and product reviews.</li>
    </ul>
    <h2>5. Event Coordination:</h2>
    <ul>
    <li>Venue selection and setup for physical launches.
    </li>
<li>Technical support for virtual launch events.</li>
<li>Guest list management and invitations.</li>
</ul>
<h2>6. Digital Marketing Campaigns:</h2>
    <ul>
     <li>Social media promotions, including influencer partnerships.</li>
       <li>Paid ad campaigns on search engines and social platforms.
        </li> 
        <li>Email marketing to potential customers and leads.</li>
        </ul>
        <h2>7. Retailer and Distributor Engagement:</h2>
        <ul>
            <li>Coordinating product listings and displays</li>
            <li>Special promotions or introductory offers.</li>
            <li>Training sessions about the product, if necessary.</li>
        </ul>
        <h2>Post-Launch Analysis:</h2>
        <ul>
            <li>Performance metrics tracking.</li>
            <li>Feedback collection and market response analysis.</li>
            <li>Iterative strategy adjustments based on real-time data.</li>
        </ul>
        <h2>Key Features:</h2>
        <ul>
            <li><strong>Dedicated Launch Team:</strong>Professionals with expertise in different domains, working cohesively to ensure launch sucess.</li>
               <li><strong>Customized Approach:</strong>Strategies tailored to suit the unique aspects of every product.</li>
               <li><strong>Multi-Channel Promotion:</strong>Integrated campaigns that span across various platforms for maximum reach</li>
               <li><strong>Feedback Loop:</strong>Continuous monitoring and tweaks based on market feedback.</li>
        </ul>
    </div>
   </div>
    );
}
export default Launching